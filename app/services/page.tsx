'use client'

import { useEffect } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BookingWidget from '@/components/ui/BookingWidget'
import { Clock, Star } from 'lucide-react'

const serviceCategories = [
  {
    id: 'massage',
    name: 'Massage Therapy',
    description: 'Therapeutic and relaxation massages to restore balance and relieve tension',
    services: [
      {
        id: '1',
        name: 'Swedish Relaxation Massage',
        description: 'Classic full-body massage using long, flowing strokes to promote deep relaxation and improve circulation.',
        duration: 60,
        price: 120,
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: '2',
        name: 'Deep Tissue Massage',
        description: 'Intensive massage targeting deeper muscle layers to release chronic tension and knots.',
        duration: 90,
        price: 160,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: '3',
        name: 'Hot Stone Massage',
        description: 'Therapeutic massage using heated stones to warm and relax muscles for deeper healing.',
        duration: 75,
        price: 140,
        image: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    ]
  },
  {
    id: 'facial',
    name: 'Facial Treatments',
    description: 'Customized skincare treatments for all skin types and concerns',
    services: [
      {
        id: '4',
        name: 'Signature Hydrating Facial',
        description: 'Deeply moisturizing facial treatment that restores skin\'s natural glow and elasticity.',
        duration: 60,
        price: 100,
        image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: '5',
        name: 'Anti-Aging Collagen Facial',
        description: 'Advanced treatment using collagen-boosting ingredients to reduce fine lines and improve skin texture.',
        duration: 75,
        price: 150,
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: '6',
        name: 'Purifying Detox Facial',
        description: 'Deep cleansing treatment that removes impurities and balances oily or acne-prone skin.',
        duration: 60,
        price: 110,
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    ]
  },
  {
    id: 'therapy',
    name: 'Body Therapy',
    description: 'Comprehensive body treatments for complete wellness and rejuvenation',
    services: [
      {
        id: '7',
        name: 'Aromatherapy Body Wrap',
        description: 'Luxurious full-body treatment using essential oils and therapeutic wraps to detoxify and nourish skin.',
        duration: 90,
        price: 180,
        image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: '8',
        name: 'Exfoliating Body Scrub',
        description: 'Invigorating treatment that removes dead skin cells and leaves skin silky smooth.',
        duration: 45,
        price: 90,
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    ]
  },
  {
    id: 'sauna',
    name: 'Sauna & Steam',
    description: 'Traditional and infrared sauna experiences for detoxification and relaxation',
    services: [
      {
        id: '9',
        name: 'Traditional Finnish Sauna',
        description: 'Authentic sauna experience with dry heat to promote sweating and detoxification.',
        duration: 30,
        price: 40,
        image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: '10',
        name: 'Infrared Sauna Session',
        description: 'Gentle infrared heat therapy that penetrates deeper for enhanced wellness benefits.',
        duration: 45,
        price: 60,
        image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
      }
    ]
  }
]

export default function ServicesPage() {
  useEffect(() => {
    // Set page metadata
    document.title = 'Spa Services - Serenity Spa'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our comprehensive range of luxury spa services including massage therapy, facial treatments, body therapy, and sauna experiences.')
    }
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Our Spa Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600 max-w-2xl mx-auto">
            Discover our comprehensive range of luxury treatments designed to rejuvenate your body, 
            refresh your mind, and restore your natural radiance.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={category.id} id={category.id} className={categoryIndex % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
          <div className="container-max section-padding">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                {category.name}
              </h2>
              <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {category.services.map((service) => (
                <div key={service.id} className="card hover:shadow-lg transition-shadow">
                  <div className="relative h-48 mb-6">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {service.name}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-neutral-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration} minutes
                    </div>
                    <div className="text-2xl font-bold text-primary-600">
                      ${service.price}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-neutral-500">(4.9/5)</span>
                  </div>
                  
                  <button 
                    className="w-full btn-primary"
                    onClick={() => {
                      const bookingSection = document.getElementById('booking-section')
                      if (bookingSection) {
                        bookingSection.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                  >
                    Book This Service
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Booking Section */}
      <section id="booking-section" className="bg-primary-50 section-padding">
        <div className="container-max">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Book Your Perfect Treatment
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Ready to experience ultimate relaxation? Choose your preferred service and 
                book your appointment with our expert therapists.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center text-neutral-600">
                  <span className="text-primary-600 mr-2">✓</span>
                  Professional licensed therapists
                </div>
                <div className="flex items-center text-neutral-600">
                  <span className="text-primary-600 mr-2">✓</span>
                  Premium organic products
                </div>
                <div className="flex items-center text-neutral-600">
                  <span className="text-primary-600 mr-2">✓</span>
                  Flexible scheduling options
                </div>
                <div className="flex items-center text-neutral-600">
                  <span className="text-primary-600 mr-2">✓</span>
                  Satisfaction guarantee
                </div>
              </div>
            </div>
            <div>
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}