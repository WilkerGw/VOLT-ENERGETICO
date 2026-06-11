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
    alt: 'Lata VOLT sabor abacaxi e hortelã',
    glow: 'rgba(223,255,25,0.32)',
  },
  {
    src: '/images/lata-roxa.webp',
    alt: 'Lata VOLT sabor açaí e uva',
    glow: 'rgba(139,92,246,0.28)',
  },
  {
    src: '/images/lata-laranja.webp',
    alt: 'Lata VOLT sabor citrus',
    glow: 'rgba(249,115,22,0.28)',
  },
  {
    src: '/images/lata-rosa.webp',
    alt: 'Lata VOLT sabor frutas vermelhas',
    glow: 'rgba(236,72,153,0.28)',
  },
]

function Hotspot({ x, y, label, tooltip, defaultOpen = false, tooltipSide = 'right' }: HotspotProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const tooltipId = useId()

  return (
    <div
      className="absolute z-30 -rotate-12"
      style={{ left: x, top: y }}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(defaultOpen)}
        className="group relative flex h-8 w-8 items-center justify-center rounded-full bg-white/72 text-sm font-bold text-black shadow-[0_12px_30px_rgba(38,52,28,0.18)] transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:scale-95"
        aria-label={`Informações do produto: ${tooltip}`}
        aria-expanded={isOpen}
        aria-controls={tooltipId}
        aria-describedby={isOpen ? tooltipId : undefined}
      >
        <span className="absolute inset-0 rounded-full bg-white/80 opacity-40 animate-ping group-hover:animate-none" />
        <span className="relative z-10 leading-none">{label}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={tooltipId}
            role="tooltip"
            initial={{ opacity: 0, scale: 0.88, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 10 }}
            transition={{ type: 'spring', stiffness: 210, damping: 18 }}
            className={`pointer-events-none absolute ${tooltipSide === 'left' ? 'right-9' : 'left-9'} top-1/2 z-40 w-56 -translate-y-1/2 rounded-[20px] border border-white/35 bg-white/12 px-5 py-4 text-white shadow-[0_24px_80px_rgba(32,44,22,0.22)] backdrop-blur-md`}
          >
            <p className="font-body text-xs font-semibold leading-snug">{tooltip}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function getNotchedPath(w: number, h: number) {
  const isMobile = w < 768
  const r = isMobile ? 22 : 34

  const tnw = isMobile ? 120 : 260
  const tnd = isMobile ? 28 : 58
  const tnStart = w / 2 - tnw / 2
  const tnEnd = w / 2 + tnw / 2

  const bnw = isMobile ? 70 : 112
  const bnd = isMobile ? 14 : 24
  const bnStart = w / 2 - bnw / 2
  const bnEnd = w / 2 + bnw / 2

  const snh = isMobile ? 54 : 92
  const snd = isMobile ? 12 : 28
  const snStart = h / 2 - snh / 2
  const snEnd = h / 2 + snh / 2

  return `
    M ${r},0
    L ${tnStart - 42},0
    C ${tnStart - 18},0 ${tnStart - 6},${tnd} ${tnStart + 30},${tnd}
    L ${tnEnd - 30},${tnd}
    C ${tnEnd + 6},${tnd} ${tnEnd + 18},0 ${tnEnd + 42},0
    L ${w - r},0
    C ${w - r * 0.42},0 ${w},${r * 0.42} ${w},${r}
    L ${w},${snStart - 24}
    C ${w},${snStart - 8} ${w - snd},${snStart - 4} ${w - snd},${snStart + 18}
    L ${w - snd},${snEnd - 18}
    C ${w - snd},${snEnd + 4} ${w},${snEnd + 8} ${w},${snEnd + 24}
    L ${w},${h - r}
    C ${w},${h - r * 0.42} ${w - r * 0.42},${h} ${w - r},${h}
    L ${bnEnd + 34},${h}
    C ${bnEnd + 14},${h} ${bnEnd + 6},${h - bnd} ${bnEnd - 18},${h - bnd}
    L ${bnStart + 18},${h - bnd}
    C ${bnStart - 6},${h - bnd} ${bnStart - 14},${h} ${bnStart - 34},${h}
    L ${r},${h}
    C ${r * 0.42},${h} 0,${h - r * 0.42} 0,${h - r}
    L 0,${snEnd + 24}
    C 0,${snEnd + 8} ${snd},${snEnd + 4} ${snd},${snEnd - 18}
    L ${snd},${snStart + 18}
    C ${snd},${snStart - 4} 0,${snStart - 8} 0,${snStart - 24}
    L 0,${r}
    C 0,${r * 0.42} ${r * 0.42},0 ${r},0
    Z
  `.replace(/\s+/g, ' ').trim()
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [dims, setDims] = useState({ width: 1200, height: 650 })
  const [activeCanIndex, setActiveCanIndex] = useState(0)
  const prefersReducedMotion = useReducedMotion()
  const activeCan = heroCans[activeCanIndex]

  const showPreviousCan = () => {
    setActiveCanIndex((current) => (current - 1 + heroCans.length) % heroCans.length)
  }

  const showNextCan = () => {
    setActiveCanIndex((current) => (current + 1) % heroCans.length)
  }

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
    if (typeof window === 'undefined' || prefersReducedMotion) return

    const interval = window.setInterval(() => {
      setActiveCanIndex((current) => (current + 1) % heroCans.length)
    }, 3400)

    return () => window.clearInterval(interval)
  }, [prefersReducedMotion])

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex w-full overflow-hidden px-3 py-5 sm:px-5"
    >
      <div
        ref={containerRef}
        className="relative z-10 h-[calc(100svh-2.5rem)] min-h-[640px] w-full max-w-[1588px] overflow-visible rounded-[22px]"
      >
        <div className="pointer-events-none absolute inset-0 z-0 h-full w-full">
          <svg className="h-full w-full" width={dims.width} height={dims.height}>
            <defs>
              <linearGradient id="heroWaveGradient" x1="0%" x2="100%" y1="8%" y2="92%">
                <stop offset="0%" stopColor="#A8C779" />
                <stop offset="42%" stopColor="#819B62" />
                <stop offset="100%" stopColor="#6F8354" />
              </linearGradient>
            </defs>
            <path
              d={getNotchedPath(dims.width, dims.height)}
              fill="url(#heroWaveGradient)"
            />
          </svg>
        </div>

        <div className="pointer-events-none absolute left-1/2 -top-2 lg:top-0 z-30 -translate-x-1/2 select-none font-display text-2xl lg:text-5xl font-black leading-none text-[#73875B]">
          Volt
        </div>

        <p className="pointer-events-none absolute right-[27%] top-[12%] z-20 hidden max-w-[340px] text-[6px] font-bold uppercase tracking-[0.22em] text-white/35 lg:block">
          A nova rotina pede energia funcional, sabor refrescante e ritmo leve.
        </p>

        <svg
          aria-hidden="true"
          className="pointer-events-none absolute right-[7%] top-[33%] z-10 hidden h-[260px] w-[430px] text-[#4C5D3B] opacity-25 lg:block"
          viewBox="0 0 430 260"
          fill="none"
        >
          <path
            d="M11 126C52 41 116 56 133 135C149 210 205 206 227 121C250 31 330 26 347 118C363 204 395 210 419 144"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="74"
          />
        </svg>

        <div className="mt-10 relative lg:max-w-[50%] z-10 flex flex-col text-center gap-6">
          <h1
            id="hero-heading"
            className="pointer-events-none flex select-none flex-col items-center justify-center text-center font-display text-[5rem] font-black uppercase leading-[0.82] text-[#DCEB91]/78 lg:left-0 lg:translate-x-0 lg:items-start lg:text-left lg:text-[9rem] xl:text-[10.4rem]"
          >
            <span>BEBA</span>
            <span>VOLT</span>
          </h1>
            <p className="text-white  font-display text-xl font-black uppercase leading-[1.04] md:text-[2rem] lg:text-[2.35rem]">
              A energia em lata que vive no mesmo ritmo que você
            </p>
            <p className="mx-auto max-w-[18rem] text-sm  font-bold leading-snug text-white/86">
              30mg de cafeína, zero açúcar e sabores refrescantes.
            </p>
            <button
              type="button"
              onClick={() => window.open('https://wa.me/5511967173625', '_blank', 'noopener,noreferrer')}
              className="group mx-6 rounded-md bg-white px-6 py-3 text-[#415435] shadow-[0_18px_40px_rgba(42,56,30,0.18)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#22321A] hover:text-white active:translate-y-0"
              aria-label="Conversar com a VOLT pelo WhatsApp"
            >
              <span className="font-label text-[9px] font-black tracking-[0.12em] transition-colors sm:text-[10px]">
                ENCONTRAR MINHA VOLT IDEAL
              </span>
            </button>
          <span className="mt-3 hidden font-label text-[7px] font-black uppercase tracking-[0.14em] text-white/55 sm:block">
            PRIMEIRO LOTE - CONDIÇÕES ESPECIAIS DE LANÇAMENTO
          </span>
        </div>
        <div className="absolute left-1/2 -bottom-50 z-30 -translate-x-1/2 -translate-y-1/2 rotate-12 transform scale-[0.78] md:left-[56%] md:top-[55%] md:scale-[1.05] lg:left-[56.5%] lg:top-[55%] lg:scale-[1.22]">
          <h1
          className="-rotate-12 opacity-20 pointer-events-none absolute left-1/2 top-[5%] z-10 flex -translate-x-1/2 select-none flex-col items-center justify-center text-center font-display text-[10rem] font-black uppercase leading-[0.82] text-[#DCEB91]/78 md:left-[48%] md:top-[13%] md:text-[7.6rem] lg:text-[9rem] xl:text-[10.4rem]"
        >
          <span>BEBA</span>
          <span>VOLT</span>
          </h1>
          
          <motion.div
            aria-hidden="true"
            animate={{
              background: `radial-gradient(circle, ${activeCan.glow} 0%, transparent 66%)`,
              scale: prefersReducedMotion ? 1 : [0.94, 1.04, 0.98],
              opacity: prefersReducedMotion ? 0.58 : [0.35, 0.58, 0.42],
            }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -inset-12 z-0 rounded-full blur-2xl"
          />

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeCan.src}
              initial={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 34, rotate: -12, scale: 0.88, filter: 'blur(8px)' }
              }
              animate={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 1, y: 0, rotate: 0, scale: 1, filter: 'blur(0px)' }
              }
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: -28, rotate: 12, scale: 0.92, filter: 'blur(6px)' }
              }
              transition={{ type: 'spring', stiffness: 140, damping: 18, mass: 0.75 }}
              className="relative z-10"
            >
              <FloatingCan src={activeCan.src} alt={activeCan.alt} width={270} height={465} />
            </motion.div>
          </AnimatePresence>

          <Hotspot x="44%" y="17%" label="+" tooltip="30mg de cafeína para foco estendido e energia limpa." />
          <Hotspot x="68%" y="43%" label="x" tooltip="Taurina + blend de vitaminas e minerais para energia funcional." />
          <Hotspot x="23%" y="76%" label="+" tooltip="Sabor gelado, leve e sem açúcar para acompanhar sua rotina." />
        </div>

        <div className="absolute right-[12%] top-[45%] z-30 hidden w-[255px] rounded-[20px] border border-white/35 bg-white/10 px-6 py-5 text-sm font-medium leading-snug text-white shadow-[0_24px_80px_rgba(32,44,22,0.18)] backdrop-blur-md lg:block">
          30mg de cafeína + blend de vitaminas e minerais
        </div>

        <div className="absolute bottom-[15%] right-[18%] z-20 hidden text-left text-xs leading-snug text-white/78 lg:block">
          <p className="border-l border-white/45 pl-4 font-black text-white">+ Mais que uma bebida</p>
          <p className="pl-4 text-white/72">Sua vitalidade em forma de lata.</p>
        </div>

        <div className="pointer-events-none absolute right-[17%] top-[17%] z-20 hidden h-24 w-24 select-none lg:block" style={{ animation: 'spin 12s linear infinite' }}>
          <svg className="h-full w-full" viewBox="0 0 100 100">
            <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
            <text className="font-label text-[6px] fill-white/70 font-black tracking-widest">
              <textPath href="#circlePath">
                VOLT ENERGY MATTERS • 30MG CAFFEINE • ZERO SUGAR •
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    </section>
  )
}
