import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET() {
  try {
    console.log('Testing Supabase connection...')
    
    // Test basic connection
    const { data: services, error: servicesError } = await supabase
      .from('spa_services')
      .select('id, name')
      .limit(5)

    if (servicesError) {
      console.error('Services query error:', servicesError)
      return NextResponse.json({
        success: false,
        error: 'Database connection failed',
        details: servicesError.message,
        supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
        hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      })
    }

    // Test bookings table
    const { data: bookings, error: bookingsError } = await supabase
      .from('bookings')
      .select('id')
      .limit(1)

    return NextResponse.json({
      success: true,
      message: 'Database connection successful',
      servicesCount: services?.length || 0,
      services: services,
      bookingsTableExists: !bookingsError,
      bookingsError: bookingsError?.message,
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    })

  } catch (error) {
    console.error('Test API error:', error)
    return NextResponse.json({
      success: false,
      error: 'API test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}