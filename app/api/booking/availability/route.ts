import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { format, addMinutes, parseISO, isAfter, isBefore } from 'date-fns'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const date = searchParams.get('date')
    const serviceId = searchParams.get('serviceId')

    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      )
    }

    // Validate date format
    try {
      parseISO(date)
    } catch {
      return NextResponse.json(
        { error: 'Invalid date format. Use YYYY-MM-DD' },
        { status: 400 }
      )
    }

    // Fetch existing bookings for the date
    const { data: bookings, error: bookingsError } = await supabase
      .from('bookings')
      .select(`
        *,
        spa_services (
          duration,
          buffer_time
        )
      `)
      .eq('booking_date', date)
      .in('status', ['pending', 'confirmed'])

    if (bookingsError) {
      console.error('Bookings fetch error:', bookingsError)
      return NextResponse.json(
        { error: 'Failed to fetch bookings' },
        { status: 500 }
      )
    }

    // Fetch blocked time slots for the date
    const { data: blockedSlots, error: blockedError } = await supabase
      .from('time_slots')
      .select('*')
      .eq('date', date)
      .eq('is_blocked', true)

    if (blockedError) {
      console.error('Blocked slots fetch error:', blockedError)
      return NextResponse.json(
        { error: 'Failed to fetch blocked slots' },
        { status: 500 }
      )
    }

    // Get service details if serviceId provided
    let serviceDetails = null
    if (serviceId) {
      const { data: service, error: serviceError } = await supabase
        .from('spa_services')
        .select('*')
        .eq('id', serviceId)
        .single()

      if (serviceError) {
        console.error('Service fetch error:', serviceError)
        return NextResponse.json(
          { error: 'Failed to fetch service details' },
          { status: 500 }
        )
      }

      serviceDetails = service
    }

    // Generate available time slots
    const availableSlots = generateAvailableSlots(
      date,
      bookings || [],
      blockedSlots || [],
      serviceDetails
    )

    return NextResponse.json({
      date,
      bookings: bookings || [],
      blockedSlots: blockedSlots || [],
      availableSlots,
      serviceDetails
    })

  } catch (error) {
    console.error('Availability API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

function generateAvailableSlots(
  date: string,
  bookings: any[],
  blockedSlots: any[],
  service: any = null
) {
  const slots = []
  const startHour = 9 // 9 AM
  const endHour = 20 // 8 PM
  const slotInterval = 30 // 30 minutes

  // Generate all possible time slots
  for (let hour = startHour; hour < endHour; hour++) {
    for (let minute = 0; minute < 60; minute += slotInterval) {
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      const slotDateTime = parseISO(`${date}T${timeString}`)
      
      // Check if slot is available
      const isAvailable = isSlotAvailable(
        slotDateTime,
        timeString,
        bookings,
        blockedSlots,
        service
      )

      slots.push({
        time: timeString,
        datetime: slotDateTime.toISOString(),
        available: isAvailable.available,
        reason: isAvailable.reason
      })
    }
  }

  return slots
}

function isSlotAvailable(
  slotDateTime: Date,
  timeString: string,
  bookings: any[],
  blockedSlots: any[],
  service: any = null
): { available: boolean; reason?: string } {
  const serviceDuration = service?.duration || 60
  const bufferTime = service?.buffer_time || 15
  const totalDuration = serviceDuration + bufferTime

  // Calculate end time for this slot
  const slotEndTime = addMinutes(slotDateTime, totalDuration)

  // Check if slot would extend beyond business hours (8 PM)
  const businessEndTime = parseISO(`${format(slotDateTime, 'yyyy-MM-dd')}T20:00`)
  if (isAfter(slotEndTime, businessEndTime)) {
    return { available: false, reason: 'Would extend beyond business hours' }
  }

  // Check against existing bookings
  for (const booking of bookings) {
    const bookingStart = parseISO(`${booking.booking_date}T${booking.booking_time}`)
    const bookingEnd = parseISO(`${booking.booking_date}T${booking.end_time}`)

    // Check if this slot overlaps with existing booking
    if (
      (isAfter(slotDateTime, bookingStart) && isBefore(slotDateTime, bookingEnd)) ||
      (isAfter(slotEndTime, bookingStart) && isBefore(slotEndTime, bookingEnd)) ||
      (isBefore(slotDateTime, bookingStart) && isAfter(slotEndTime, bookingEnd))
    ) {
      return { available: false, reason: 'Time slot already booked' }
    }
  }

  // Check against blocked time slots
  for (const blocked of blockedSlots) {
    const blockedStart = parseISO(`${blocked.date}T${blocked.start_time}`)
    const blockedEnd = parseISO(`${blocked.date}T${blocked.end_time}`)

    // Check if this slot overlaps with blocked time
    if (
      (isAfter(slotDateTime, blockedStart) && isBefore(slotDateTime, blockedEnd)) ||
      (isAfter(slotEndTime, blockedStart) && isBefore(slotEndTime, blockedEnd)) ||
      (isBefore(slotDateTime, blockedStart) && isAfter(slotEndTime, blockedEnd))
    ) {
      return { available: false, reason: blocked.block_reason || 'Time slot blocked' }
    }
  }

  return { available: true }
}

// Block time slots (admin only)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { date, startTime, endTime, reason } = body

    if (!date || !startTime || !endTime) {
      return NextResponse.json(
        { error: 'Date, start time, and end time are required' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('time_slots')
      .insert([
        {
          date,
          start_time: startTime,
          end_time: endTime,
          is_available: false,
          is_blocked: true,
          block_reason: reason || 'Blocked by admin'
        }
      ])
      .select()

    if (error) {
      console.error('Block slot error:', error)
      return NextResponse.json(
        { error: 'Failed to block time slot' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        message: 'Time slot blocked successfully',
        blockedSlot: data[0]
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Block slot API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}