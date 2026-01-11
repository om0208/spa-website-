import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      serviceId,
      customerName,
      customerEmail,
      customerPhone,
      bookingDate,
      bookingTime,
      notes
    } = body

    // Validate required fields
    if (!customerName || !customerEmail || !customerPhone || !bookingDate || !bookingTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Insert booking into database
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          service_id: serviceId || null,
          customer_name: customerName,
          customer_email: customerEmail,
          customer_phone: customerPhone,
          booking_date: bookingDate,
          booking_time: bookingTime,
          status: 'pending',
          notes: notes || null
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to create booking' },
        { status: 500 }
      )
    }

    // Here you could add email notification logic
    // await sendBookingConfirmationEmail(customerEmail, data[0])

    return NextResponse.json(
      { 
        message: 'Booking created successfully',
        booking: data[0]
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const date = searchParams.get('date')

    let query = supabase
      .from('bookings')
      .select(`
        *,
        spa_services (
          name,
          duration,
          price
        )
      `)
      .order('created_at', { ascending: false })

    if (status) {
      query = query.eq('status', status)
    }

    if (date) {
      query = query.eq('booking_date', date)
    }

    const { data, error } = await query

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to fetch bookings' },
        { status: 500 }
      )
    }

    return NextResponse.json({ bookings: data })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}