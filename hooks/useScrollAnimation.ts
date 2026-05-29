'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface ScrollAnimationConfig {
  from: gsap.TweenVars
  to: gsap.TweenVars
  trigger?: string | Element
  start?: string
  end?: string
  scrub?: boolean | number
  pin?: boolean
  markers?: boolean
}

export function useScrollAnimation<T extends HTMLElement>(
  config: ScrollAnimationConfig
) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (!ref.current) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(ref.current!, config.from, {
        ...config.to,
        scrollTrigger: {
          trigger: config.trigger || ref.current,
          start: config.start || 'top 80%',
          end: config.end || 'bottom 20%',
          scrub: config.scrub ?? false,
          pin: config.pin ?? false,
          markers: config.markers ?? false,
        },
      })
    })

    return () => ctx.revert()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return ref
}
