'use client'
import { motion } from 'framer-motion'
import { lineReveal, staggerContainer } from '@/lib/variants'

interface SplitHeadlineProps {
  text: string
  tag?: 'h1' | 'h2' | 'h3'
  className?: string
  id?: string
}

export function SplitHeadline({
  text,
  tag: Tag = 'h2',
  className,
  id,
}: SplitHeadlineProps) {
  const lines = text.split('\n')

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={staggerContainer}
    >
      <Tag id={id} className={className}>
        {lines.map((line, i) => (
          <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
            <motion.span
              style={{ display: 'block' }}
              variants={lineReveal}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  )
}
