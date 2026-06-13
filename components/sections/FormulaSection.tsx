'use client'
import { motion, type Variants } from 'framer-motion'
import { SplitHeadline } from '../ui/SplitHeadline'
import { CountUp } from '../ui/CountUp'
import Image from 'next/image'

export function FormulaSection() {
  const attributes = [
    { value: 30, label: 'Cafeína' },
    { value: 1000, label: 'Taurina' },
    { value: 100, label: 'CoQ10' },
    { value: 0, label: 'Açúcar' },
    { value: 0, label: 'Calorias' },
  ]

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  }

  const circleVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 15 } }
  }

  return (
    <section aria-labelledby="formula-heading" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-24 md:px-12">
      {/* Faint Background Logo / Image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03]">
        <div className="relative h-[800px] w-[800px]">
          <Image src="/images/latas-seguimentadas.webp" alt="" fill sizes="800px" className="object-cover" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl text-center lg:text-left">
        <SplitHeadline
          tag="h2"
          text="POR TRÁS DO PRAZER,\nUMA FÓRMULA QUE TRABALHA"
          className="mx-auto mb-6 max-w-2xl font-display text-2xl font-extrabold leading-[0.94] text-black sm:text-5xl md:text-[2.6rem] lg:mx-0"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mb-20 max-w-2xl font-body text-lg font-light text-black/70 md:text-xl lg:mx-0"
        >
          Cafeína, taurina, CoQ10 e vitaminas em uma bebida leve, gaseificada e fácil de encaixar no dia.
        </motion.p>

        {/* Circular Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {attributes.map((attr, i) => (
            <motion.div
              key={i}
              variants={circleVariants}
              whileHover={{ scale: 1.05 }}
              className="group flex h-28 lg:h-25 w-28 lg:w-25 flex-col items-center justify-center rounded-full border border-black/5 bg-white shadow-xl transition-shadow hover:shadow-2xl md:h-48 md:w-48"
            >
              <span className="font-display text-2xl lg:text-[1.5rem] text-(--green-volts) md:text-4xl">
                <CountUp end={attr.value} />
              </span>
              <span className="mt-2 text-center font-label text-[10px] font-bold text-black/50 group-hover:text-black">
                {attr.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="mt-16"
        >
          <button type="button" className="font-label text-sm text-black/50 underline transition-colors hover:text-black">
            VER O QUE TEM DENTRO DA LATA
          </button>
        </motion.div>
      </div>
    </section>
  )
}
