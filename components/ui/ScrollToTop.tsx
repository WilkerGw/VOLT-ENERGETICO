'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={scrollToTop}
          type="button"
          aria-label="Voltar ao topo"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition-transform hover:scale-110 active:scale-95 md:bottom-8 md:right-8"
        >
          <ArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
