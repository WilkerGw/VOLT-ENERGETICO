'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useStickySection } from '../ui/StickySection'
import Image from 'next/image'

const marketOptions = [
  'Bebida gostosa, cheia de açúcar e calorias vazias.',
  'Suplemento funcional, pesado, difícil de tomar, zero prazer.',
]

export function PropostaSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useStickySection()

  const { scrollYProgress } = useScroll({
    target: stickyRef || containerRef,
    offset: ['start end', 'end start'],
  })

  const productY = useTransform(scrollYProgress, [0, 1], ['24px', '-28px'])
  const pedestalY = useTransform(scrollYProgress, [0, 1], ['14px', '-10px'])
  const ringRotate = useTransform(scrollYProgress, [0, 1], ['-18deg', '18deg'])

  return (
    <section
      aria-labelledby="proposta-heading"
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#d9e979] px-2 py-6 sm:px-4 md:px-8 lg:px-12"
    >
      <div className="pointer-events-none absolute -left-10 top-0 h-28 w-36 rounded-br-[48px] bg-[#cddf6e] sm:h-36 sm:w-48 lg:h-44 lg:w-56" />
      <div className="pointer-events-none absolute -right-10 top-0 h-28 w-36 rounded-bl-[48px] bg-[#cddf6e] sm:h-36 sm:w-48 lg:h-44 lg:w-56" />

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto w-full max-w-[1420px] overflow-hidden rounded-[32px] bg-[#f8f0e8] px-6 py-12 shadow-[0_24px_80px_rgba(36,40,20,0.14)] sm:px-10 sm:py-16 md:rounded-[44px] lg:px-20 lg:py-20 xl:px-28"
      >
        <div className="grid min-h-[640px] items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">
          <div className="relative z-20 max-w-[610px]">
            <motion.h2
              id="proposta-heading"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl font-display text-2xl font-extrabold uppercase leading-[0.94] text-[#27231f] sm:text-5xl md:text-[2.6rem]"
            >
              OU É GOSTOSO E TE DERRUBA, OU É SAUDÁVEL E TEM GOSTO DE CASTIGO
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 space-y-5 font-body text-[#4d4741]"
            >
              <p className="text-sm font-semibold sm:text-base">
                Hoje você tem duas grandes opções no mercado:
              </p>

              <div className="space-y-3">
                {marketOptions.map((option) => (
                  <div
                    key={option}
                    className="w-fit max-w-full rounded-md border border-[#6b6258]/45 bg-[#fffaf2]/40 px-3 py-2 text-sm font-bold leading-snug text-[#5a524a] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:text-base"
                  >
                    {option}
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-1 text-sm leading-snug sm:text-base">
                <p className="font-display text-2xl font-black text-[#27231f] sm:text-3xl">
                  Resultado?
                </p>
                <p>
                  Você até compra, mas não cria hábito. A latinha de refri vence.
                  O milkshake vence. O hábito ruim vence.
                </p>
                <p className="font-extrabold text-[#27231f]">
                  A VOLT foi criada para romper esse dilema:
                </p>
                <p>
                  Prazer de um drink gelado + inteligência nutricional de um
                  suplemento sério.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="relative z-10 flex min-h-[360px] items-end justify-center sm:min-h-[460px] lg:min-h-[610px] lg:justify-end">
            <motion.svg
              aria-hidden="true"
              style={{ rotate: ringRotate }}
              className="absolute right-1/2 top-0 h-72 w-72 translate-x-1/2 text-[#cbdc70] opacity-80 sm:h-96 sm:w-96 lg:right-10 lg:h-[520px] lg:w-[520px] lg:translate-x-0"
              viewBox="0 0 420 420"
            >
              <path
                id="propostaRing"
                d="M 210,210 m -166,0 a 166,166 0 1,1 332,0 a 166,166 0 1,1 -332,0"
                fill="none"
              />
              <text className="font-label text-[19px] fill-current tracking-[0.18em]">
                <textPath href="#propostaRing">
                  NO GUILT / JUST PLEASURE / 2025 / SINTA O QUE TE MOVE /
                </textPath>
              </text>
            </motion.svg>

            <motion.div
              aria-hidden="true"
              style={{ y: pedestalY }}
              className="absolute bottom-0 right-1/2 h-28 w-[120%] translate-x-1/2 skew-y-[-10deg] lg:right-[-120px] lg:h-48 lg:w-[88%] lg:translate-x-0"
            />

            <motion.div
              style={{ y: productY }}
              initial={{ opacity: 0, x: 70, rotate: 2, scale: 0.92 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 90, damping: 18, delay: 0.18 }}
              className="relative z-20 w-full max-w-[360px] lg:max-w-[650px] xl:max-w-[720px]"
            >
              <Image
                src="/images/embalagem.webp"
                alt="Pack de latas VOLT No Guilt, Just Pleasure"
                width={900}
                height={900}
                sizes="(max-width: 640px) 88vw, (max-width: 1024px) 50vw, 720px"
                className="h-auto w-full drop-shadow-[0_28px_28px_rgba(33,29,24,0.24)]"
              />
            </motion.div>
          </div>
        </div>
        <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', bounce: 0.4, delay: 0.3 }}
                    className="absolute right-0 bottom-0 lg:right-10 lg:bottom-10 z-10 shrink-0 scale-90 sm:scale-100 lg:scale-105"
                  >
                    <Image
                      src="/images/mascote-5.webp"
                      alt="Mascote lendo um livro"
                      width={200}
                      height={200}
                      className="h-50 w-auto"
                    />
                  </motion.div>
      </motion.div>
      
    </section>
  )
}
