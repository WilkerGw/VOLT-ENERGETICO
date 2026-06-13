'use client'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface MarqueeProps {
  children: ReactNode
  speed?: number // pixels per second
  direction?: 'left' | 'right'
}

export function Marquee({
  children,
  speed = 60,
  direction = 'left',
}: MarqueeProps) {
  const duration = (100 / speed) * 10
  const initialX = direction === 'left' ? '0%' : '-50%'
  const targetX = direction === 'left' ? '-50%' : '0%'

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex w-max shrink-0 will-change-transform"
        initial={{ x: initialX }}
        animate={{ x: targetX }}
        transition={{
          duration,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <div className="flex shrink-0">{children}</div>
        <div aria-hidden="true" className="flex shrink-0">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
