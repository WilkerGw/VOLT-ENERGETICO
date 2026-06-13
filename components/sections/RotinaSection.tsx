'use client'
import { motion, type Variants } from 'framer-motion'
import { SplitHeadline } from '../ui/SplitHeadline'
import { slideLeft, fadeUp } from '@/lib/variants'
import Image from 'next/image'
import { Activity, Sun, Palmtree, Briefcase, Utensils } from 'lucide-react'

export function RotinaSection() {
  const occasions = [
    { icon: <Activity className="h-6 w-6 text-(--green-volts)" />, text: 'Depois do treino, quando o corpo pede leveza' },
    { icon: <Sun className="h-6 w-6 text-(--green-volts)" />, text: 'De manhã, quando o dia ainda não começou' },
    { icon: <Palmtree className="h-6 w-6 text-(--green-volts)" />, text: 'Na praia, no rolê ou no meio do calor' },
    { icon: <Briefcase className="h-6 w-6 text-(--green-volts)" />, text: 'No trabalho, quando o foco começa a escapar' },
    { icon: <Utensils className="h-6 w-6 text-(--green-volts)" />, text: 'No lugar daquele lanche que pesa' },
  ]

  const listVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } }
  }

  return (
    <section aria-labelledby="rotina-heading" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 md:px-12 lg:px-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 lg:flex-row lg:items-center">
        
        {/* Left: Image Context */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideLeft}
          className="relative w-full flex-1 lg:h-[700px]"
        >
          <div className="relative h-96 w-full overflow-hidden rounded-3xl lg:h-full lg:w-[90%]">
            <Image
              src="/images/lata-academia.webp"
              alt="VOLT na rotina"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          {/* Decorative floating badge — CSS animation instead of JS */}
          <div
            style={{ animation: 'float 4s ease-in-out infinite' }}
            className="absolute -right-6 bottom-12 flex h-32 w-32 items-center justify-center rounded-full bg-(--green-light) font-display text-3xl font-bold text-black shadow-2xl lg:-right-12"
          >
            24/7
          </div>
        </motion.div>

        {/* Right: Text & List */}
        <div className="flex-1 text-center text-white lg:text-left">
          <SplitHeadline
            tag="h2"
            text="A VOLT ENTRA ONDE\nSUA ENERGIA COSTUMA CAIR"
            className="mx-auto mb-12 max-w-2xl font-display text-2xl font-extrabold leading-[0.94] text-white sm:text-5xl md:text-[2.6rem] lg:mx-0"
          />

          <motion.ul
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 text-left font-body text-xl md:text-2xl"
          >
            {occasions.map((item, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                className="flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-2xl shadow-inner">
                  {item.icon}
                </div>
                <span className="font-light">{item.text}</span>
              </motion.li>
            ))}
          </motion.ul>
          
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 1 }} className="mt-12 flex justify-center lg:justify-start">
             <button type="button" className="rounded-full bg-white px-8 py-4 font-label font-bold text-(--olive) transition-transform hover:scale-105 active:scale-95">
                ENCAIXAR NA MINHA ROTINA
             </button>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
