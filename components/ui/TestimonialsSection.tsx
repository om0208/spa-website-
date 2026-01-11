import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'Regular Client',
    content: 'The most relaxing experience I\'ve ever had. The massage therapy here is absolutely incredible, and the atmosphere is so peaceful.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    serviceImage: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'First-time Visitor',
    content: 'I was skeptical about spa treatments, but the deep tissue massage completely changed my mind. Professional staff and amazing results.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    serviceImage: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Sarah Williams',
    role: 'Wellness Enthusiast',
    content: 'The facial treatments here are phenomenal. My skin has never looked better, and the relaxation is just an added bonus.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
    serviceImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover why thousands of clients trust us with their wellness journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Service Image */}
              <div className="h-48 relative">
                <img
                  src={testimonial.serviceImage}
                  alt="Spa service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20" />
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial */}
                <blockquote className="text-neutral-700 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Client Info */}
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-neutral-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-6">Ready to experience the difference?</p>
          <a
            href="/booking"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            Book Your Treatment Today
          </a>
        </div>
      </div>
    </section>
  )
}