'use client'
import { motion } from 'framer-motion'

interface MarqueeProps {
  children: React.ReactNode
  speed?: number // pixels per second
  direction?: 'left' | 'right'
  pauseOnHover?: boolean
}

export function Marquee({
  children,
  speed = 60,
  direction = 'left',
  pauseOnHover = true,
}: MarqueeProps) {
  const directionMultiplier = direction === 'left' ? -1 : 1

  return (
    <div
      style={{ overflow: 'hidden', display: 'flex' }}
      className={pauseOnHover ? 'group' : ''}
    >
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          style={{ display: 'flex', flexShrink: 0 }}
          animate={{ x: [0, `${directionMultiplier * -100}%`] }}
          transition={{
            duration: 100 / speed * 10,
            ease: 'linear',
            repeat: Infinity,
          }}
          className={pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''}
        >
          {children}
        </motion.div>
      ))}
    </div>
  )
}
