import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BookingWidget from '@/components/ui/BookingWidget'
import { Clock, MapPin, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Book Appointment - Serenity Spa',
  description: 'Book your relaxing spa appointment online. Choose from massage therapy, facial treatments, body therapy, and sauna services.',
  keywords: 'book spa appointment, spa booking, massage booking, facial appointment',
}

const hours = [
  { day: 'Monday - Friday', time: '9:00 AM - 8:00 PM' },
  { day: 'Saturday', time: '8:00 AM - 7:00 PM' },
  { day: 'Sunday', time: '10:00 AM - 6:00 PM' },
]

const policies = [
  {
    title: 'Cancellation Policy',
    description: 'Please provide at least 24 hours notice for cancellations to avoid charges.'
  },
  {
    title: 'Arrival Time',
    description: 'Please arrive 15 minutes early to complete intake forms and begin relaxing.'
  },
  {
    title: 'Gift Certificates',
    description: 'Gift certificates are available for purchase and make perfect gifts for loved ones.'
  },
  {
    title: 'Health Considerations',
    description: 'Please inform us of any health conditions or allergies when booking your appointment.'
  }
]

export default function BookingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Spa booking background"
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="container-max text-center relative">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Book Your Appointment
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 max-w-2xl mx-auto">
            Ready to experience ultimate relaxation? Schedule your spa treatment today and 
            let our expert therapists help you unwind and rejuvenate.
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="lg:grid lg:grid-cols-3 lg:gap-16">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Schedule Your Visit
                </h2>
                <p className="text-neutral-600">
                  Fill out the form below to request your appointment. We'll contact you within 
                  24 hours to confirm your booking and answer any questions.
                </p>
              </div>
              <BookingWidget />
            </div>

            {/* Sidebar Information */}
            <div className="mt-12 lg:mt-0 space-y-8">
              {/* Contact Information */}
              <div className="card">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary-600" />
                    <div>
                      <div className="text-sm font-medium text-neutral-900">Address</div>
                      <div className="text-sm text-neutral-600">123 Wellness Avenue<br />Serenity City, SC 12345</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary-600" />
                    <div>
                      <div className="text-sm font-medium text-neutral-900">Phone</div>
                      <div className="text-sm text-neutral-600">(555) 123-RELAX</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary-600" />
                    <div>
                      <div className="text-sm font-medium text-neutral-900">Email</div>
                      <div className="text-sm text-neutral-600">hello@serenityspa.com</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="card">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  <Clock className="inline h-5 w-5 mr-2" />
                  Hours of Operation
                </h3>
                <div className="space-y-2">
                  {hours.map((schedule, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-sm text-neutral-600">{schedule.day}</span>
                      <span className="text-sm font-medium text-neutral-900">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Tips */}
              <div className="card">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Booking Tips</h3>
                <ul className="space-y-2 text-sm text-neutral-600">
                  <li>• Book in advance for weekend appointments</li>
                  <li>• Couples massages require 48-hour notice</li>
                  <li>• First-time clients receive a complimentary consultation</li>
                  <li>• Ask about our membership packages for regular visitors</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="bg-neutral-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Booking Policies
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Please review our policies to ensure a smooth spa experience
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {policies.map((policy, index) => (
              <div key={index} className="card">
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {policy.title}
                </h3>
                <p className="text-neutral-600">{policy.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}