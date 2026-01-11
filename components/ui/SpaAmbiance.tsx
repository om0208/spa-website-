interface SpaAmbianceProps {
  className?: string
  overlay?: boolean
}

export default function SpaAmbiance({ className = '', overlay = true }: SpaAmbianceProps) {
  const ambianceImages = [
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Essential oils and candles
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Spa treatment room
    'https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Relaxation area
    'https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', // Hot stones
  ]

  const randomImage = ambianceImages[Math.floor(Math.random() * ambianceImages.length)]

  return (
    <div className={`absolute inset-0 ${className}`}>
      <img
        src={randomImage}
        alt="Spa ambiance"
        className="w-full h-full object-cover"
      />
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40" />
      )}
    </div>
  )
}

// Specific spa ambiance components for different sections
export function MassageAmbiance({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <img
        src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        alt="Massage therapy ambiance"
        className="w-full h-full object-cover opacity-10"
      />
    </div>
  )
}

export function FacialAmbiance({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <img
        src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        alt="Facial treatment ambiance"
        className="w-full h-full object-cover opacity-10"
      />
    </div>
  )
}

export function RelaxationAmbiance({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <img
        src="https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        alt="Relaxation ambiance"
        className="w-full h-full object-cover opacity-15"
      />
    </div>
  )
}