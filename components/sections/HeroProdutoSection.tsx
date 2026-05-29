'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { SplitHeadline } from '../ui/SplitHeadline'
import { useStickySection } from '../ui/StickySection'
import Image from 'next/image'

export function HeroProdutoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useStickySection()
  
  // Track scroll progress of the outer sticky wrapper for precise parallax alignment
  const { scrollYProgress } = useScroll({
    target: stickyRef || containerRef,
    offset: ['start end', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])

  const listVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
  }

  return (
    <section aria-labelledby="hero-produto-heading" ref={containerRef} className="relative flex min-h-screen items-center overflow-hidden">
      
      {/* Parallax Background */}
      <motion.div 
        style={{ y }} 
        className="absolute inset-[-20%] z-0"
      >
        <Image
          src="/images/lata-montanha.webp"
          alt="Céu Azul"
          fill
          sizes="100vw"
          className="object-cover object-top"
          quality={75}
        />
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-24 md:px-12 lg:flex-row lg:px-24">
        
        {/* Left: Text & List */}
        <div className="flex-1 text-white">
          <SplitHeadline
            tag="h2"
            text="UMA BEBIDA DE PERFORMANCE,\nCOM GOSTO DE VONTADE\nDE TOMAR"
            className="mb-12 max-w-2xl font-display text-2xl font-extrabold leading-[0.94] text-white sm:text-5xl md:text-[2.6rem]"
          />

          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6 font-body text-xl font-medium md:text-2xl"
          >
            {[
               'Energia sem ritual complicado',
               'Refrescância de refri, intenção de suplemento',
               'Zero açúcar, zero peso, zero castigo',
               'Pra rotina, treino, praia e foco'
            ].map((text, i) => (
              <motion.li key={i} variants={itemVariants} className="flex items-center gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--green-volts) text-black">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>{text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right: Invisible spacer for layout, since the can is already in the background image */}
        <div className="flex-1" />
      </div>
    </section>
  )
}
