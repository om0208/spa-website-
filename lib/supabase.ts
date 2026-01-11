import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://demo.supabase.co'
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'demo_anon_key'

// Create a mock client for demo purposes if no real credentials are provided
const isDemoMode = supabaseUrl === 'https://demo.supabase.co' || supabaseAnonKey === 'demo_anon_key'

export const supabase = isDemoMode 
  ? createMockSupabaseClient() 
  : createClient(supabaseUrl, supabaseAnonKey)

// Mock Supabase client for demo purposes
function createMockSupabaseClient() {
  return {
    from: (table: string) => ({
      select: () => ({
        order: () => ({
          then: (callback: any) => callback({ data: [], error: null })
        }),
        then: (callback: any) => callback({ data: [], error: null })
      }),
      insert: () => ({
        select: () => ({
          then: (callback: any) => callback({ 
            data: [{ id: 'demo-id', created_at: new Date().toISOString() }], 
            error: null 
          })
        })
      }),
      update: () => ({
        eq: () => ({
          select: () => ({
            then: (callback: any) => callback({ 
              data: [{ id: 'demo-id', updated_at: new Date().toISOString() }], 
              error: null 
            })
          })
        })
      }),
      delete: () => ({
        eq: () => ({
          then: (callback: any) => callback({ error: null })
        })
      })
    })
  } as any
}

export type Database = {
  public: {
    Tables: {
      spa_services: {
        Row: {
          id: string
          name: string
          description: string
          price: number
          duration: number
          category: string
          image_url: string | null
          is_active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          price: number
          duration: number
          category: string
          image_url?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          price?: number
          duration?: number
          category?: string
          image_url?: string | null
          is_active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      spa_homepage_content: {
        Row: {
          id: string
          section: string
          content: any
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          section: string
          content: any
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          section?: string
          content?: any
          created_at?: string
          updated_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          content: string
          excerpt: string
          featured_image: string | null
          author: string
          published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content: string
          excerpt: string
          featured_image?: string | null
          author: string
          published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string
          excerpt?: string
          featured_image?: string | null
          author?: string
          published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      bookings: {
        Row: {
          id: string
          service_id: string
          customer_name: string
          customer_email: string
          customer_phone: string
          booking_date: string
          booking_time: string
          status: string
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          service_id: string
          customer_name: string
          customer_email: string
          customer_phone: string
          booking_date: string
          booking_time: string
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          service_id?: string
          customer_name?: string
          customer_email?: string
          customer_phone?: string
          booking_date?: string
          booking_time?: string
          status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}