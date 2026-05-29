'use client'
import { useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { gsap } from 'gsap'

interface CountUpProps {
  end: number
  prefix?: string
  suffix?: string
  duration?: number
  decimals?: number
}

export function CountUp({
  end,
  prefix = '',
  suffix = '',
  duration = 2,
  decimals = 0,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (!isInView || !ref.current) return
    const obj = { val: 0 }
    
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: end,
        duration,
        ease: 'power2.out',
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent =
              prefix + obj.val.toFixed(decimals) + suffix
          }
        },
      })
    })

    return () => ctx.revert()
  }, [isInView, end, prefix, suffix, duration, decimals])

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  )
}
