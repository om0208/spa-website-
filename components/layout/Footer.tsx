import Link from 'next/link'
import { Flower2, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react'

const navigation = {
  services: [
    { name: 'Massage Therapy', href: '/services#massage' },
    { name: 'Facial Treatments', href: '/services#facial' },
    { name: 'Body Therapy', href: '/services#therapy' },
    { name: 'Sauna & Steam', href: '/services#sauna' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  support: [
    { name: 'Book Appointment', href: '/booking' },
    { name: 'Gift Cards', href: '/gift-cards' },
    { name: 'Membership', href: '/membership' },
    { name: 'FAQ', href: '/faq' },
  ],
  social: [
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-max section-padding">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <Flower2 className="h-8 w-8 text-primary-400" />
              <span className="font-serif text-2xl font-semibold">Serenity Spa</span>
            </Link>
            <p className="text-sm leading-6 text-neutral-300">
              Experience ultimate relaxation and rejuvenation in our tranquil sanctuary. 
              Your wellness journey begins here.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-neutral-300">
                <MapPin className="h-4 w-4" />
                <span>123 Wellness Avenue, Serenity City, SC 12345</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-300">
                <Phone className="h-4 w-4" />
                <span>(555) 123-RELAX</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-neutral-300">
                <Mail className="h-4 w-4" />
                <span>hello@serenityspa.com</span>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-neutral-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-neutral-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm leading-6 text-neutral-300 hover:text-white transition-colors">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6">Follow Us</h3>
                <div className="mt-6 flex space-x-4">
                  {navigation.social.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-neutral-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-neutral-400">
            &copy; 2024 Serenity Spa. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}