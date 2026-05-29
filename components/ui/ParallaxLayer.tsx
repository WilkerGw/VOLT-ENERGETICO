'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useStickySection } from './StickySection'

interface ParallaxLayerProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxLayer({
  children,
  speed = -0.3,
  className,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const stickyRef = useStickySection()

  // If inside a sticky container, track the outer scrolling wrapper's progress
  // rather than the stationary sticky section itself.
  const { scrollYProgress } = useScroll({
    target: stickyRef || ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])

  return (
    <motion.div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div style={{ y }} className="w-full">
        {children}
      </motion.div>
    </motion.div>
  )
}
