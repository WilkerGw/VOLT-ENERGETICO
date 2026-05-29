'use client'
import { ReactNode, useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MotionConfig } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

export function AnimationProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      ScrollTrigger.refresh()
      return
    }

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.35,
    })

    lenisRef.current = lenis

    const handleScroll = (time: number) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(handleScroll)
    gsap.ticker.lagSmoothing(0)

    lenis.on('scroll', ScrollTrigger.update)
    const refreshScroll = () => ScrollTrigger.refresh()
    window.addEventListener('resize', refreshScroll)
    requestAnimationFrame(refreshScroll)

    return () => {
      window.removeEventListener('resize', refreshScroll)
      gsap.ticker.remove(handleScroll)
      lenis.destroy()
    }
  }, [])

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
