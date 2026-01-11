'use client'

import { useEffect, useState } from 'react'
import { Calendar, Users, Scissors, TrendingUp } from 'lucide-react'

interface DashboardStats {
  totalBookings: number
  todayBookings: number
  totalServices: number
  revenue: number
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalBookings: 0,
    todayBookings: 0,
    totalServices: 0,
    revenue: 0
  })
  const [recentBookings, setRecentBookings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      // Fetch recent bookings
      const bookingsResponse = await fetch('/api/booking')
      const bookingsData = await bookingsResponse.json()
      
      if (bookingsData.bookings) {
        setRecentBookings(bookingsData.bookings.slice(0, 5))
        
        // Calculate stats
        const today = new Date().toISOString().split('T')[0]
        const todayBookings = bookingsData.bookings.filter(
          (booking: any) => booking.booking_date === today
        ).length
        
        setStats({
          totalBookings: bookingsData.bookings.length,
          todayBookings,
          totalServices: 10, // This would come from services API
          revenue: bookingsData.bookings.reduce((sum: number, booking: any) => {
            return sum + (booking.spa_services?.price || 0)
          }, 0)
        })
      }
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error)
    } finally {
      setLoading(false)
    }
  }

  const statCards = [
    {
      name: 'Total Bookings',
      value: stats.totalBookings,
      icon: Calendar,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      name: 'Today\'s Bookings',
      value: stats.todayBookings,
      icon: Users,
      color: 'text-green-600 bg-green-100'
    },
    {
      name: 'Active Services',
      value: stats.totalServices,
      icon: Scissors,
      color: 'text-purple-600 bg-purple-100'
    },
    {
      name: 'Total Revenue',
      value: `$${stats.revenue.toLocaleString()}`,
      icon: TrendingUp,
      color: 'text-orange-600 bg-orange-100'
    }
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-bold text-neutral-900">Welcome to Admin Dashboard</h1>
        <p className="mt-2 text-neutral-600">
          Manage your spa services, bookings, and content from this central hub.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <div key={stat.name} className="card">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-neutral-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-neutral-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="card">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-neutral-900">Recent Bookings</h2>
          <a href="/admin/bookings" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            View all →
          </a>
        </div>
        
        {recentBookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {recentBookings.map((booking: any) => (
                  <tr key={booking.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-neutral-900">
                          {booking.customer_name}
                        </div>
                        <div className="text-sm text-neutral-500">
                          {booking.customer_email}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                      {booking.spa_services?.name || 'General Booking'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                      {new Date(booking.booking_date).toLocaleDateString()} at {booking.booking_time}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800'
                          : booking.status === 'pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-8 text-neutral-500">
            No bookings yet. Bookings will appear here once customers start booking.
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <a href="/admin/services" className="card hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
              <Scissors className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">Manage Services</h3>
              <p className="text-sm text-neutral-600">Add, edit, or remove spa services</p>
            </div>
          </div>
        </a>
        
        <a href="/admin/bookings" className="card hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-green-100 text-green-600 rounded-lg">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">View Bookings</h3>
              <p className="text-sm text-neutral-600">Manage customer appointments</p>
            </div>
          </div>
        </a>
        
        <a href="/admin/blog" className="card hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-purple-100 text-purple-600 rounded-lg">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900">Blog Posts</h3>
              <p className="text-sm text-neutral-600">Create and manage blog content</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}