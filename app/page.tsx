import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BookingWidget from '@/components/ui/BookingWidget'
import SpaGallery from '@/components/ui/SpaGallery'
import TestimonialsSection from '@/components/ui/TestimonialsSection'
import Link from 'next/link'
import { Sparkles, Heart, Leaf, Star } from 'lucide-react'

const features = [
  {
    name: 'Luxury Treatments',
    description: 'Premium spa services using the finest natural ingredients and advanced techniques.',
    icon: Sparkles,
  },
  {
    name: 'Wellness Focus',
    description: 'Holistic approach to health and wellness, nurturing both body and mind.',
    icon: Heart,
  },
  {
    name: 'Natural Products',
    description: 'Organic, eco-friendly products that are gentle on your skin and the environment.',
    icon: Leaf,
  },
  {
    name: 'Expert Therapists',
    description: 'Highly trained professionals dedicated to providing exceptional care.',
    icon: Star,
  },
]

const services = [
  {
    name: 'Massage Therapy',
    description: 'Relax and rejuvenate with our signature massage treatments.',
    image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    href: '/services#massage'
  },
  {
    name: 'Facial Treatments',
    description: 'Revitalize your skin with our customized facial therapies.',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    href: '/services#facial'
  },
  {
    name: 'Body Therapy',
    description: 'Comprehensive body treatments for complete wellness.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    href: '/services#therapy'
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-secondary-50 overflow-hidden">
        <div className="container-max section-padding">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
                Welcome to
                <span className="text-primary-600 block">Serenity Spa</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Escape the everyday and immerse yourself in a world of tranquility. 
                Our luxury spa offers premium treatments designed to restore your body, 
                mind, and spirit in an atmosphere of pure serenity.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link href="/booking" className="btn-primary">
                  Book Your Experience
                </Link>
                <Link href="/services" className="btn-outline">
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                className="w-full rounded-2xl shadow-xl"
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Luxury spa treatment room"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Experience the Difference
            </p>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              At Serenity Spa, we combine luxury with wellness to create an unforgettable experience 
              that leaves you feeling refreshed, renewed, and radiant.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-neutral-900">
                    <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-neutral-50 section-padding">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Our Signature Services
            </h2>
            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Discover our range of premium treatments designed to pamper and rejuvenate
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.name} className="card hover:shadow-lg transition-shadow">
                <div className="relative h-48 mb-4">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {service.name}
                </h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <Link href={service.href} className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn More →
                </Link>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Spa Gallery */}
      <SpaGallery />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* Booking Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Ready to Relax?
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Book your appointment today and step into a world of tranquility. 
                Our expert therapists are ready to provide you with an unforgettable spa experience.
              </p>
              <div className="mt-8">
                <div className="flex items-center space-x-4 text-sm text-neutral-600">
                  <span>✓ Same-day bookings available</span>
                  <span>✓ Flexible cancellation policy</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-neutral-600 mt-2">
                  <span>✓ Gift certificates available</span>
                  <span>✓ Membership discounts</span>
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