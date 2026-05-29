'use client'
import { motion, Variants } from 'framer-motion'
import { staggerContainer } from '@/lib/variants'

interface AnimatedSectionProps {
  children: React.ReactNode
  variants?: Variants
  className?: string
  delay?: number
  margin?: string
}

export function AnimatedSection({
  children,
  variants = staggerContainer,
  className,
  delay = 0,
  margin = '-80px',
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
