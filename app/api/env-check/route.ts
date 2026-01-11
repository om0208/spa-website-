import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing',
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing',
    supabaseUrlValue: process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 20) + '...',
    nodeEnv: process.env.NODE_ENV
  })
}