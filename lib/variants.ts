import { Variants } from 'framer-motion'

/* ── Easing curves ── */
export const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]
export const EASE_IN_OUT_QUART: [number, number, number, number] = [0.76, 0, 0.24, 1]

/* ── Spring configs ── */
export const SPRING_GENTLE = { type: 'spring' as const, stiffness: 80, damping: 20 }
export const SPRING_BOUNCY = { type: 'spring' as const, stiffness: 200, damping: 15 }
export const SPRING_STIFF = { type: 'spring' as const, stiffness: 400, damping: 30 }

/* ── Slide variants ── */
export const slideLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
}

export const slideRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
}

/* ── Fade up ── */
export const fadeUp: Variants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: EASE_OUT_EXPO },
  },
}

/* ── Scale in ── */
export const scaleIn: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: SPRING_GENTLE,
  },
}

/* ── Flip 3D ── */
export const flipIn: Variants = {
  hidden: { rotateY: 25, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: EASE_OUT_EXPO },
  },
}

/* ── Headline line reveal ── */
export const lineReveal: Variants = {
  hidden: { clipPath: 'inset(0 0 100% 0)' },
  visible: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 0.9, ease: EASE_IN_OUT_QUART },
  },
}

/* ── Stagger containers ── */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export const staggerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}
