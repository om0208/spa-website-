import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    console.log('Received booking request:', body)
    
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

    // For now, just return success without database insertion
    return NextResponse.json(
      { 
        message: 'Booking request received successfully! We will contact you to confirm.',
        booking: {
          id: 'temp-' + Date.now(),
          customer_name: customerName,
          customer_email: customerEmail,
          booking_date: bookingDate,
          booking_time: bookingTime,
          status: 'pending'
        }
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}