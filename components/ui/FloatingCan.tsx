'use client'
import Image from 'next/image'

interface FloatingCanProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function FloatingCan({
  src,
  alt,
  width = 300,
  height = 500,
  className,
}: FloatingCanProps) {
  return (
    <div className={className} style={{ position: 'relative' }}>
      <div
        style={{
          animation: 'float 4s ease-in-out infinite',
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes="(max-width: 640px) 188px, (max-width: 1024px) 238px, 263px"
          style={{ height: 'auto', objectFit: 'contain', width: 'auto' }}
          priority
        />
      </div>
      {/* Shadow beneath the can — static radial gradient, no blur filter */}
      <div
        style={{
          animation: 'floatShadow 4s ease-in-out infinite',
          position: 'absolute',
          bottom: -10,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '70%',
          height: 20,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(0,0,0,0.25), transparent 70%)',
        }}
      />
    </div>
  )
}
