'use client'

import { useState } from 'react'

interface GalleryImage {
  id: string
  src: string
  alt: string
  category: string
}

const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Professional massage therapy session',
    category: 'massage'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Luxury facial treatment',
    category: 'facial'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Hot stone massage therapy',
    category: 'massage'
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Relaxing facial skincare treatment',
    category: 'facial'
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Deep tissue massage with hot stones',
    category: 'massage'
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Professional facial skincare treatment',
    category: 'facial'
  }
]

const categories = [
  { id: 'all', name: 'All' },
  { id: 'massage', name: 'Massage' },
  { id: 'facial', name: 'Facial' }
]

export default function SpaGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Spa Gallery
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore our luxurious facilities and treatments through our curated gallery
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-neutral-600 hover:bg-amber-50 hover:text-amber-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl max-h-full relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-amber-400 transition-colors"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-lg font-medium">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}