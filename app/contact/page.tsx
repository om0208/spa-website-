import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Serenity Spa',
  description: 'Get in touch with Serenity Spa. Find our location, hours, and contact information. We\'re here to help with all your wellness needs.',
  keywords: 'contact spa, spa location, spa hours, spa phone number',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            alt="Spa contact background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container-max text-center relative">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with any questions about our services, 
            or to schedule your next wellness experience.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Visit Us</h3>
                    <p className="text-neutral-600">
                      123 Wellness Avenue<br />
                      Serenity City, SC 12345<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Call Us</h3>
                    <p className="text-neutral-600">
                      Main: (555) 123-RELAX<br />
                      Bookings: (555) 123-4567
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Email Us</h3>
                    <p className="text-neutral-600">
                      General: hello@serenityspa.com<br />
                      Bookings: bookings@serenityspa.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Hours</h3>
                    <div className="text-neutral-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 7:00 PM</p>
                      <p>Sunday: 10:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="mt-12 lg:mt-0">
              <div className="card">
                <h3 className="text-xl font-semibold text-neutral-900 mb-6">Send us a Message</h3>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Subject
                    </label>
                    <select className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option value="">Select a subject</option>
                      <option value="booking">Booking Inquiry</option>
                      <option value="services">Services Information</option>
                      <option value="gift">Gift Certificates</option>
                      <option value="membership">Membership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-neutral-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Find Us
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Located in the heart of Serenity City, easily accessible with ample parking
            </p>
          </div>
          
          {/* Placeholder for map - you would integrate with Google Maps or similar */}
          <div className="bg-neutral-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-neutral-400 mx-auto mb-4" />
              <p className="text-neutral-600">Interactive map would be integrated here</p>
              <p className="text-sm text-neutral-500 mt-2">123 Wellness Avenue, Serenity City, SC 12345</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}