'use client'
import type { CSSProperties } from 'react'

interface BlobShapeProps {
  color?: string
  size?: number
  className?: string
  style?: CSSProperties
}

export function BlobShape({
  color = 'var(--green-light)',
  size = 400,
  className,
  style,
}: BlobShapeProps) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        opacity: 0.35,
        position: 'absolute',
        borderRadius: '50%',
        pointerEvents: 'none',
        willChange: 'auto',
        ...style,
      }}
    />
  )
}
