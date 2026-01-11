import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Heart, Award, Users, Leaf } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Serenity Spa',
  description: 'Learn about Serenity Spa\'s mission, values, and expert team dedicated to providing luxury wellness experiences in a tranquil environment.',
  keywords: 'about spa, spa team, wellness philosophy, luxury spa experience',
}

const values = [
  {
    name: 'Holistic Wellness',
    description: 'We believe in treating the whole person - body, mind, and spirit - for complete well-being.',
    icon: Heart,
  },
  {
    name: 'Excellence',
    description: 'We maintain the highest standards in service, products, and facilities to exceed expectations.',
    icon: Award,
  },
  {
    name: 'Personal Care',
    description: 'Every treatment is customized to your individual needs and preferences.',
    icon: Users,
  },
  {
    name: 'Natural Approach',
    description: 'We use organic, eco-friendly products that are gentle on you and the environment.',
    icon: Leaf,
  },
]

const team = [
  {
    name: 'Sarah Williams',
    role: 'Spa Director & Licensed Massage Therapist',
    bio: 'With over 15 years of experience in wellness and spa management, Sarah leads our team with passion for holistic healing.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Maria Santos',
    role: 'Senior Esthetician',
    bio: 'Maria specializes in advanced skincare treatments and has helped thousands of clients achieve their skin goals.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
  {
    name: 'Jennifer Kim',
    role: 'Wellness Coordinator',
    bio: 'Jennifer ensures every guest receives personalized attention and creates customized wellness plans.',
    image: 'https://images.unsplash.com/photo-1594824388853-d0c2d4e5b1b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 section-padding">
        <div className="container-max">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                About Serenity Spa
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Founded in 2015, Serenity Spa has been a sanctuary of wellness and tranquility 
                in our community. Our mission is to provide a peaceful escape where you can 
                reconnect with yourself and experience the transformative power of holistic wellness.
              </p>
              <p className="mt-4 text-lg leading-8 text-neutral-600">
                We believe that true beauty and wellness come from within, and our carefully 
                curated treatments are designed to nurture your body, calm your mind, and 
                restore your spirit.
              </p>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                className="w-full rounded-2xl shadow-xl"
                src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Serenity Spa interior"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape the experience we create for our guests.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div key={value.name} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-neutral-900">{value.name}</h3>
                <p className="mt-2 text-neutral-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-neutral-50 section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Meet Our Expert Team
            </h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
              Our skilled professionals are dedicated to providing you with exceptional care and personalized attention.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="card text-center">
                <div className="relative h-48 w-48 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.role}</p>
                <p className="text-neutral-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white section-padding">
        <div className="container-max">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <img
                className="w-full rounded-2xl shadow-lg"
                src="https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Spa treatment room"
              />
            </div>
            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Serenity Spa was born from a simple vision: to create a space where people could 
                escape the stresses of daily life and reconnect with their inner peace. What started 
                as a small wellness center has grown into a comprehensive spa experience that serves 
                hundreds of guests each month.
              </p>
              <p className="mt-4 text-lg leading-8 text-neutral-600">
                We've carefully designed every aspect of our spa to promote relaxation and healing. 
                From our tranquil treatment rooms to our selection of organic products, every detail 
                has been chosen to enhance your wellness journey.
              </p>
              <div className="mt-8">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary-600">5000+</div>
                    <div className="text-sm text-neutral-600">Happy Clients</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-600">15+</div>
                    <div className="text-sm text-neutral-600">Premium Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}