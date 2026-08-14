'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion, useScroll, useTransform, type Variants } from 'framer-motion'
import { useStickySection } from '../ui/StickySection'

const featurePills = [
  { label: '30mg de cafeína', top: '24%', left: '72%' },
  { label: 'Taurina + vitaminas', top: '33%', left: '70%' },
  { label: 'Zero açúcar', top: '42%', left: '68%' },
  { label: 'Abacaxi e hortelã', top: '51%', left: '66%' },
  { label: '310ml gelada', top: '60%', left: '64%' },
]

const listVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.28 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 140, damping: 18 },
  },
}

export function HeroProdutoSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const stickyRef = useStickySection()
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: stickyRef || containerRef,
    offset: ['start end', 'end start'],
  })
  const skyY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])
  const canY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ['0%', '0%'] : ['4%', '-4%']
  )

  return (
    <section
      aria-labelledby="hero-produto-heading"
      ref={containerRef}
      className="relative min-h-screen p-4 lg:p-8 flex items-center overflow-hidden bg-[var(--cream)]"
    >
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[30%] w-[25%] rounded-tr-[72px] bg-[#DCEB7D]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-[30%] w-[22%] rounded-tl-[72px] bg-[#DCEB7D]"
      />

      <div className="relative z-10 mx-auto w-full">
        <div className="relative lg:h-[80vh] overflow-hidden rounded-[28px] bg-[#91D5F2] shadow-[0_24px_80px_rgba(74,122,30,0.12)]">
          <div className=" flex flex-col h-full lg:flex-row lg:justify-between z-10 p-6 lg:px-12 lg:ml-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-center lg:text-start flex flex-col justify-center lg:w-[40%] lg:h-[100%] lg:my-auto text-white drop-shadow-[0_8px_24px_rgba(46,119,163,0.18)]"
            >
              <h2
                id="hero-produto-heading"
                className="text-[2rem] lg:text-[3rem]  leading-8 lg:leading-14 font-extrabold uppercase text-white [text-shadow:0_8px_24px_rgba(12,38,35,0.18)]"
              >
                Uma bebida proteica em lata. Leve como um refri, séria como seu treino.
              </h2>

              <p className="mx-auto mt-2 font-body text-base font-bold text-[#4F5A52] [text-shadow:0_1px_10px_rgba(255,255,255,0.36)] sm:text-lg lg:mx-0">
                Beba Volt é a nova geração de bebidas funcionais.
              </p>

              <p className="mx-auto mt-4 lg:mt-0 font-label text-[0.65rem] font-black text-[#4F5A52] [text-shadow:0_1px_8px_rgba(255,255,255,0.34)] sm:mt-10 lg:mx-0">
                E abrir, beber gelada e seguir.
                <br className="lg:hidden" />
                Sem pó, sem shaker, sem desculpa.
              </p>
            </motion.div>

            <div className="relative min-h-[290px] sm:min-h-[350px] lg:h-[520px] lg:min-h-0 lg:w-[54%]">
              <div className="absolute left-1/2 top-[43%] z-20 w-[150px] -translate-x-1/2 -translate-y-1/2 rotate-[13deg]  md:w-[225px] lg:left-[40%] lg:w-[275px]">
                <motion.div
                  style={{ y: canY }}
                  initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.92 }}
                  whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ type: 'spring', stiffness: 95, damping: 16, mass: 0.8 }}
                >
                  <div
                    aria-hidden="true"
                    className="absolute -inset-8 rounded-full bg-white/20 blur-2xl"
                  />
                  <Image
                    src="/images/lata-verde.webp"
                    alt="Lata Volt sabor abacaxi e hortelã"
                    width={360}
                    height={640}
                    sizes="(max-width: 640px) 150px, (max-width: 1024px) 225px, 300px"
                    className="relative z-10 h-auto w-full drop-shadow-[0_30px_36px_rgba(57,91,47,0.24)]"
                    priority
                  />
                </motion.div>
              </div>

              <motion.ul
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="absolute bottom-4 left-1/2 z-30 flex w-[min(22rem,100%)] -translate-x-1/2 flex-wrap justify-center gap-2 lg:inset-0 lg:block lg:w-auto lg:translate-x-0"
                aria-label="Beneficios da bebida"
              >
                {featurePills.map((pill) => (
                  <motion.li
                    key={pill.label}
                    variants={itemVariants}
                    className="rounded-full bg-[var(--cream)] px-4 py-2 text-center font-body text-[0.72rem] font-black text-[#647044] shadow-[0_12px_26px_rgba(68,99,41,0.12)] sm:text-xs lg:absolute lg:min-w-[9.25rem] lg:-translate-x-1/2 lg:px-5 lg:py-2.5"
                    style={{ top: pill.top, left: pill.left }}
                  >
                    {pill.label}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>

        <p className="mt-3 text-center font-label text-[0.62rem] font-black text-[#8A9A61]">
          Sabores que acompanham seu ritmo
        </p>
      </div>
    </section>
  )
}
