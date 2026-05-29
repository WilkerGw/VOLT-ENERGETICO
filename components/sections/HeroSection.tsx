'use client'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { useState, useEffect, useId, useRef } from 'react'
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react'
import { FloatingCan } from '../ui/FloatingCan'

interface HotspotProps {
  x: string
  y: string
  label: string
  tooltip: string
  defaultOpen?: boolean
  tooltipSide?: 'left' | 'right'
}

const heroCans = [
  {
    src: '/images/lata-verde.webp',
    alt: 'Lata VOLT sabor original',
    glow: 'rgba(223,255,25,0.36)',
  },
  {
    src: '/images/lata-roxa.webp',
    alt: 'Lata VOLT sabor açaí e uva',
    glow: 'rgba(139,92,246,0.34)',
  },
  {
    src: '/images/lata-laranja.webp',
    alt: 'Lata VOLT sabor citrus',
    glow: 'rgba(249,115,22,0.34)',
  },
  {
    src: '/images/lata-rosa.webp',
    alt: 'Lata VOLT sabor frutas vermelhas',
    glow: 'rgba(236,72,153,0.34)',
  },
]

function Hotspot({ x, y, label, tooltip, defaultOpen = false, tooltipSide = 'right' }: HotspotProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const tooltipId = useId()

  return (
    <div
      className="absolute z-30 transform -rotate-12"
      style={{ left: x, top: y }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Pulse button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(defaultOpen)}
        className="group relative flex h-8 w-8 items-center justify-center rounded-full bg-white/50 text-sm font-bold text-black shadow-md transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-95"
        aria-label={`Informações do produto: ${tooltip}`}
        aria-expanded={isOpen}
        aria-controls={tooltipId}
        aria-describedby={isOpen ? tooltipId : undefined}
      >
        <span className="absolute inset-0 rounded-full bg-white opacity-40 animate-ping group-hover:animate-none" />
        <span className="relative z-10 leading-none">{label}</span>
      </button>

      {/* Tooltip Pill */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={tooltipId}
            role="tooltip"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className={`absolute ${tooltipSide === 'left' ? 'right-8' : 'left-8'} top-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-md border border-white/10 text-white rounded-2xl px-5 py-3 shadow-xl w-60 z-40 pointer-events-none`}
          >
            <p className="font-body text-xs font-medium leading-snug">
              {tooltip}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Dynamically generate the SVG path to keep the notches sharp and proportional
function getNotchedPath(w: number, h: number) {
  const isMobile = w < 768
  const r = isMobile ? 24 : 48 // corner radius

  // Top notch: centered
  const tnw = isMobile ? 120 : 160
  const tnd = isMobile ? 18 : 25
  const tnStart = w / 2 - tnw / 2
  const tnEnd = w / 2 + tnw / 2

  // Bottom notch: centered
  const bnw = isMobile ? 40 : 60
  const bnd = isMobile ? 10 : 15
  const bnStart = w / 2 - bnw / 2
  const bnEnd = w / 2 + bnw / 2

  // Left/Right notches (side notches)
  const snh = isMobile ? 50 : 80
  const snd = isMobile ? 10 : 16
  const snStart = h / 2 - snh / 2
  const snEnd = h / 2 + snh / 2

  return `
    M ${r},0
    L ${tnStart - 15},0
    C ${tnStart - 5},0 ${tnStart - 5},${tnd} ${tnStart + 5},${tnd}
    L ${tnEnd - 5},${tnd}
    C ${tnEnd + 5},${tnd} ${tnEnd + 5},0 ${tnEnd + 15},0
    L ${w - r},0
    Q ${w},0 ${w},${r}
    L ${w},${snStart - 10}
    C ${w},${snStart - 2} ${w - snd},${snStart - 2} ${w - snd},${snStart + 8}
    L ${w - snd},${snEnd - 8}
    C ${w - snd},${snEnd + 2} ${w},${snEnd + 2} ${w},${snEnd + 10}
    L ${w},${h - r}
    Q ${w},${h} ${w - r},${h}
    L ${bnEnd + 10},${h}
    C ${bnEnd + 2},${h} ${bnEnd + 2},${h - bnd} ${bnEnd - 4},${h - bnd}
    L ${bnStart + 4},${h - bnd}
    C ${bnStart - 2},${h - bnd} ${bnStart - 2},${h} ${bnStart - 10},${h}
    L ${r},${h}
    Q 0,${h} 0,${h - r}
    L 0,${snEnd + 10}
    C 0,${snEnd + 2} ${snd},${snEnd + 2} ${snd},${snEnd - 8}
    L ${snd},${snStart + 8}
    C ${snd},${snStart - 2} 0,${snStart - 2} 0,${snStart - 10}
    L 0,${r}
    Q 0,0 ${r},0
    Z
  `.replace(/\s+/g, ' ').trim()
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dims, setDims] = useState({ width: 1200, height: 650 })
  const [activeCanIndex, setActiveCanIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()
  const activeCan = heroCans[activeCanIndex]

  useEffect(() => {
    if (typeof window === 'undefined') return
    const el = containerRef.current
    if (!el) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.borderBoxSize?.[0]?.inlineSize ?? entry.contentRect.width
        const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height
        setDims({ width, height })
      }
    })

    resizeObserver.observe(el)
    return () => resizeObserver.disconnect()
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    heroCans.forEach(({ src }) => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return

    const interval = window.setInterval(() => {
      setActiveCanIndex((current) => (current + 1) % heroCans.length)
    }, 3400)

    return () => window.clearInterval(interval)
  }, [prefersReducedMotion])

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[var(--cream)] px-4 py-6 md:px-8 md:py-12 lg:py-0"
    >
      {/* Main Notched Premium Panel */}
      <div
        ref={containerRef}
          className="relative z-10 flex h-auto min-h-[680px] w-full max-w-[1320px] items-center justify-center rounded-[24px] sm:min-h-[620px] md:rounded-[48px] lg:h-[82svh] lg:min-h-[620px]"
      >

        {/* SVG Background Path with Notches */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          <svg className="w-full h-full" width={dims.width} height={dims.height}>
            <path
              d={getNotchedPath(dims.width, dims.height)}
              fill="#839F63"
              stroke="#6C874D"
              strokeWidth="4"
            />
          </svg>
        </div>

        {/* Abstract Background Detail Curves */}
        <div className="absolute inset-0 z-0 opacity-10 overflow-hidden rounded-[24px] md:rounded-[48px] pointer-events-none">
          <div className="absolute -right-20 -bottom-20 w-[600px] h-[600px] bg-black rounded-full filter blur-3xl" />
          <div className="absolute -left-20 top-10 w-[500px] h-[500px] bg-white rounded-full filter blur-3xl" />
        </div>

        {/* Left Notch Control */}
        <button
          type="button"
          className="absolute left-[3px] top-1/2 z-30 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-[#3A5025] transition-all hover:scale-110 hover:text-[#1A2E0F] active:scale-95 md:flex"
          aria-label="Sabor anterior"
        >
          <ChevronLeft className="h-5 w-5 stroke-[2.5]" />
        </button>

        {/* Right Notch Control */}
        <button
          type="button"
          className="absolute right-[3px] top-1/2 z-30 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-[#3A5025] transition-all hover:scale-110 hover:text-[#1A2E0F] active:scale-95 md:flex"
          aria-label="Próximo sabor"
        >
          <ChevronRight className="h-5 w-5 stroke-[2.5]" />
        </button>

        {/* Bottom Notch Control */}
        <button
          type="button"
          className="absolute bottom-[2px] left-1/2 z-30 hidden h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full text-[#3A5025] transition-all hover:scale-110 active:scale-95 md:flex"
          aria-label="Rolar para baixo"
        >
          <ChevronDown className="h-5 w-5 stroke-[2.5] animate-bounce" />
        </button>

        {/* Outer/Inner Grid Layout */}
        <div className="z-10 w-full h-full flex flex-col justify-between p-6 lg:p-14 text-white">

          {/* Main Content Split */}
          <div className="flex flex-col lg:flex-row lg:items-center items-center justify-between gap-8 lg:gap-12 flex-1 w-full my-4 lg:my-0">

            {/* Left: Headline & Description */}
            <div className="flex flex-col items-start text-left max-w-xl lg:w-1/2 z-20 gap-6">
              <h1 id="hero-heading" className=" max-w-2xl text-center font-display text-8xl lg:text-[10rem] font-extrabold leading-[0.94] text-[#DFFF19] select-none lg:text-start">
                BEBA VOLT
              </h1>
              <h2 className=" max-w-2xl  text-center font-display text-2xl font-extrabold uppercase leading-[0.94] text-white lg:text-start">
                A energia em lata que vive <br className='hidden lg:block'/>no mesmo ritmo que você
              </h2>
              <button
                type="button"
                className="rounded-lg bg-white px-6 py-3 sm:px-8 sm:py-3.5 text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg group cursor-pointer"
              >
                <span className="font-label text-[10px] font-bold tracking-widest text-[#3A5025] transition-colors group-hover:text-white sm:text-xs">
                  ENCONTRAR MINHA VOLT IDEAL
                </span>
              </button>
              <span className="font-label text-[10px] font-black uppercase tracking-widest text-[#3A5025] opacity-90 select-none text-center lg:text-start">
                PRIMEIRO LOTE - CONDIÇÕES ESPECIAIS DE LANÇAMENTO
              </span>
              
          {/* Footer Row */}
          <div className="flex items-start w-full">
            <div className="font-body text-[10px] text-[#3A5025] text-start mt-auto z-10 hidden sm:block uppercase tracking-widest font-black select-none">
              <p className="text-[#DFFF19]">+ Mais que uma bebida</p>
              <p className="text-white/70">Sua vitalidade em forma de lata.</p>
            </div>
          </div>
            </div>

            {/* Right: Floating Can & Hotspots */}
            <div className="relative w-full lg:w-1/2 flex items-center justify-center h-full min-h-[320px]">

              {/* Giant Background Outlined Text */}
              <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="font-display -translate-x-[20%] -translate-y-[5%] text-4xl font-black text-[#DFFF19] opacity-15 lg:text-6xl">BEBA</span>
                <span className="font-display -translate-y-[5%] translate-x-[20%] text-4xl font-black text-transparent lg:text-6xl" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>VOLT</span>
              </div>

              {/* Floating Can with Hotspots Container */}
              <div className="relative z-10 rotate-12 scale-100 transform sm:scale-90 md:scale-95 lg:scale-120">
                <motion.div
                  aria-hidden="true"
                  animate={{
                    background: `radial-gradient(circle, ${activeCan.glow} 0%, transparent 66%)`,
                    scale: prefersReducedMotion ? 1 : [0.92, 1.08, 0.96],
                    opacity: prefersReducedMotion ? 0.7 : [0.55, 0.9, 0.6],
                  }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute -inset-8 z-0 rounded-full blur-2xl"
                />

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeCan.src}
                    initial={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 42, rotate: -18, scale: 0.84, filter: 'blur(10px)' }
                    }
                    animate={
                      prefersReducedMotion
                        ? { opacity: 1 }
                        : { opacity: 1, y: 0, rotate: 0, scale: 1, filter: 'blur(0px)' }
                    }
                    exit={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: -38, rotate: 18, scale: 0.9, filter: 'blur(8px)' }
                    }
                    transition={{ type: 'spring', stiffness: 140, damping: 18, mass: 0.75 }}
                    className="relative z-10"
                  >
                    <FloatingCan
                      src={activeCan.src}
                      alt={activeCan.alt}
                      width={250}
                      height={430}
                    />
                  </motion.div>
                </AnimatePresence>

                <motion.div
                  key={`ring-${activeCan.src}`}
                  aria-hidden="true"
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0.7, scale: 0.72, rotate: -18 }}
                  animate={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 1.32, rotate: 18 }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className="pointer-events-none absolute inset-8 z-0 rounded-full border border-white/40"
                />

                {/* Hotspots matching details from image */}
                <Hotspot x="25%" y="20%" label="+" tooltip="30mg de cafeína para foco estendido e energia limpa." />
                <Hotspot x="75%" y="45%" label="x" tooltip="Taurina + blend de minerais e vitaminas do complexo B para imunidade e performance." defaultOpen tooltipSide="left" />
                <Hotspot x="30%" y="75%" label="+" tooltip="Sabor Citrus incrível de Abacaxi e Hortelã fresca." />
              </div>

              {/* Vector Spinning Circular Badge */}
              <div className="absolute right-0 top-6 z-20 w-24 h-24 pointer-events-none select-none hidden xl:block" style={{ animation: 'spin 12s linear infinite' }}>
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                  <text className="font-label text-[6px] fill-[#3A5025] font-black tracking-widest">
                    <textPath href="#circlePath">
                      VOLT ENERGY MATTERS • 30MG CAFFEINE • 100% ENERGY •
                    </textPath>
                  </text>
                </svg>
              </div>

            </div>
            
          </div>

        </div>

      </div>
    </section>
  )
}
