import Image from 'next/image'

interface SpaImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export default function SpaImage({ 
  src, 
  alt, 
  width = 500, 
  height = 300, 
  className = '',
  priority = false 
}: SpaImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      style={{ objectFit: 'cover' }}
    />
  )
}