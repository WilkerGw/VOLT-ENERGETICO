'use client'
import { motion, type Variants } from 'framer-motion'
import { SplitHeadline } from '../ui/SplitHeadline'
import Image from 'next/image'

export function CTADuploSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  }

  const cardLeftVariants: Variants = {
    hidden: { rotateY: 20, opacity: 0, x: -50, perspective: 1000 },
    visible: { rotateY: 0, opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  const cardRightVariants: Variants = {
    hidden: { rotateY: -20, opacity: 0, x: 50, perspective: 1000 },
    visible: { rotateY: 0, opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  }

  return (
    <section aria-labelledby="cta-duplo-heading" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-(--green-dark) px-6 py-24 md:px-12">
      <div className="mx-auto mb-12 w-full max-w-4xl text-center md:mb-16 lg:text-left">
        <SplitHeadline
          tag="h2"
          text="ESCOLHA COMO VOCÊ QUER\nENTRAR NA ONDA"
          className="mx-auto mb-12 max-w-2xl font-display text-2xl font-extrabold leading-[0.94] text-white sm:text-5xl md:text-[2.6rem] lg:mx-0"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row"
      >
        {/* Card 1 */}
        <motion.div
          variants={cardLeftVariants}
          style={{ transformStyle: 'preserve-3d' }}
          className="group relative flex min-h-[420px] flex-1 flex-col overflow-hidden rounded-[28px] bg-(--green-volts) p-7 text-center text-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl sm:p-10 md:rounded-[40px] lg:text-left"
        >
          <div className="relative z-10 flex h-full flex-col items-center lg:items-start">
            <h3 className="mb-4 max-w-2xl font-display text-2xl font-extrabold leading-[0.94] text-white sm:text-5xl md:text-[2.6rem]">PRIMEIRA LATA, PRIMEIRA ONDA</h3>
            <p className="mb-8 max-w-sm font-body text-base font-light leading-snug text-white/90 sm:text-lg">
              Comece pelo sabor original e entenda por que energia também pode ser gostosa.
            </p>
            <div className="mt-auto pt-8">
              <button type="button" className="flex w-fit items-center justify-center rounded-full bg-black px-8 py-4 font-label font-bold text-white transition-transform group-hover:scale-105 active:scale-95">
                QUERO EXPERIMENTAR
              </button>
            </div>
          </div>
          <div className="absolute -bottom-20 -right-20 z-0 h-64 w-64 opacity-90 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-3 md:h-96 md:w-96">
            <Image src="/images/latas-empilhadas.webp" alt="Latas VOLT" fill sizes="(max-width: 768px) 16rem, 24rem" className="object-contain" />
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardRightVariants}
          style={{ transformStyle: 'preserve-3d' }}
          className="group relative flex min-h-[420px] flex-1 flex-col overflow-hidden rounded-[28px] bg-black p-7 text-center text-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl sm:p-10 md:rounded-[40px] lg:text-left"
        >
          <div className="relative z-10 flex h-full flex-col items-center lg:items-start">
            <h3 className="mb-4 max-w-2xl font-display text-2xl font-extrabold leading-[0.94] text-white sm:text-5xl md:text-[2.6rem]">VOLT TODO MÊS, SEM FALTAR</h3>
            <p className="mb-8 max-w-sm font-body text-base font-light leading-snug text-white/80 sm:text-lg">
              Monte sua rotina e receba sua dose de prazer funcional antes de acabar.
            </p>
            <div className="mt-auto pt-8">
              <button type="button" className="flex w-fit items-center justify-center rounded-full bg-(--green-volts) px-8 py-4 font-label font-bold text-black transition-transform group-hover:scale-105 active:scale-95">
                MONTAR MINHA ROTINA
              </button>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 z-0 h-64 w-64 opacity-60 transition-transform duration-700 group-hover:scale-110 md:h-80 md:w-80">
            <Image src="/images/latas-caidas.webp" alt="Latas VOLT" fill sizes="(max-width: 768px) 16rem, 20rem" className="object-contain" />
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}
