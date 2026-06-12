'use client'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, lineReveal } from '@/lib/variants'
import { AnimatedSection } from '../ui/AnimatedSection'
import Image from 'next/image'

export function ManifestoSection() {
  return (
    <section
      aria-labelledby="manifesto-heading"
      className="relative w-full min-h-screen flex items-center justify-center py-16 px-6 lg:px-24 overflow-hidden bg-[var(--cream)]"
    >

      {/* Background Organic Wave Shape */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15 overflow-hidden">
        <svg className="absolute -left-20 -top-20 w-[600px] h-[600px]" viewBox="0 0 400 400" fill="none">
          <path
            d="M 120,40 C 200,-20 280,30 330,100 C 380,170 340,260 290,320 C 240,380 140,390 80,340 C 20,290 -20,200 10,130 C 40,60 70,80 120,40 Z"
            fill="#839F63"
          />
        </svg>
      </div>

      <AnimatedSection className="relative z-10 mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

        {/* Left Column: Image Card and Walking Mascot */}
        <div className="relative flex w-full items-center justify-center pb-24 lg:w-1/2 lg:pb-0">

          {/* Decorative organic outline wave behind card */}
          <div className="absolute -left-10 -top-10 w-[110%] h-[110%] z-0 pointer-events-none opacity-30">
            <svg className="w-full h-full" viewBox="0 0 500 500" fill="none">
              <path
                d="M 150,50 Q 250,-10 350,50 T 450,200 T 350,400 T 150,350 T 50,200 Z"
                fill="none"
                stroke="#6C874D"
                strokeWidth="6"
                strokeDasharray="12 12"
              />
            </svg>
          </div>

          {/* Premium Image Card */}
          <motion.div
            variants={fadeUp}
            className="relative z-10 h-[400px] w-[400px] overflow-hidden rounded-[36px] border-4 border-white/20 bg-[#C5D8B0] shadow-2xl sm:h-[400px] sm:w-[400px] sm:rounded-[48px] lg:h-[460px] lg:w-[460px]"
          >
            <Image
              src="/images/latas-empilhadas.webp"
              alt="Latas empilhadas de energético VOLT"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Walking Mascot Overlapping bottom of card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', bounce: 0.4, delay: 0.5, duration: 0.8 }}
            className="absolute bottom-2 right-4 z-20 scale-75 sm:-bottom-10 sm:right-10 sm:scale-100 lg:right-4 lg:scale-110"
          >
            <Image
              src="/images/mascote-1.webp"
              alt="Mascote animado andando"
              width={150}
              height={150}
              className="h-auto w-auto"
            />
          </motion.div>

        </div>

        {/* Right Column: Editorial Text Content */}
        <div className="z-20 flex max-w-xl flex-grow flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">

          {/* Top Tag */}
          <motion.div
            variants={fadeUp}
            className="inline-block font-label text-[11px] text-[var(--olive)] font-black tracking-widest uppercase select-none"
          >
            Saúde que nasce do prazer, não da culpa
          </motion.div>

          {/* Headline split into exact lines matching mockup */}
          <motion.h2
            id="manifesto-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="my-4 max-w-2xl font-display text-2xl font-extrabold leading-[0.94] text-black sm:text-5xl md:text-[2.6rem]"
          >
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <motion.span style={{ display: 'block' }} variants={lineReveal}>
                Tudo que é <span className="text-[var(--olive)] font-black">&quot;saudável&quot;</span>
              </motion.span>
            </span>
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <motion.span style={{ display: 'block' }} variants={lineReveal}>
               vem embalado em culpa e restrição.
              </motion.span>
            </span>
          </motion.h2>

          {/* Body Copy matching the mockup copy */}
          <motion.div
            variants={fadeUp}
            className="space-y-3 font-body text-base font-normal leading-snug text-black/75 md:text-[1.05rem]"
          >
            <p className="font-semibold text-black text-lg">A Volt nasceu pra quebrar isso.</p>
            <p>Não é sobre contar calorias o tempo todo.</p>
            <p>É sobre viver mais, melhor – com energia, presença e prazer e deixar a saúde ser a consequência natural dessa rotina.</p>
            <p>A cada lata, uma escolha simples:</p>
            <p className="flex items-start justify-center gap-2.5 font-medium text-black lg:justify-start">
              <span>trocar o refri, o whey, a água com gás por algo que te faz bem por dentro e por fora.</span>
            </p>
          </motion.div>

        </div>

      </AnimatedSection>
    </section>
  )
}
