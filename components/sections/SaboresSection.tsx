'use client'
import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { SplitHeadline } from '../ui/SplitHeadline'

const sabores = [
  {
    nome: 'Original',
    desc: 'O clássico leve, gelado e direto.',
    img: '/images/lata-verde.webp',
    color: 'var(--green-volts)',
  },
  {
    nome: 'Citrus',
    desc: 'Ácido, solar e perfeito pro calor.',
    img: '/images/lata-laranja.webp',
    color: '#F97316', // Laranja
  },
  {
    nome: 'Frutas Vermelhas',
    desc: 'Doce na medida, sem pesar.',
    img: '/images/lata-rosa.webp',
    color: '#EC4899', // Rosa
  },
  {
    nome: 'Açaí & Uva',
    desc: 'Mais intenso, mais brasileiro, mais VOLT.',
    img: '/images/lata-roxa.webp',
    color: '#8B5CF6', // Roxo
  },
]

export function SaboresSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  }

  return (
    <div aria-label="section" id="sabores" className="flex min-h-screen flex-col justify-center px-4 py-24 md:px-12 lg:px-24">
      <div className="mx-auto mb-20 flex w-full max-w-7xl flex-col items-center text-center lg:items-start lg:text-left">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 rounded-full border border-black/10 px-4 py-1.5 font-label text-sm text-black/60"
        >
          SABORES
        </motion.div>
        
        <SplitHeadline
          tag="h2"
          text="SABORES QUE NÃO PARECEM\nUMA OBRIGAÇÃO SAUDÁVEL"
          className="mx-auto max-w-2xl font-display text-2xl font-extrabold leading-[0.94] text-black sm:text-5xl md:text-[2.6rem] lg:mx-0"
        />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-5 max-w-xl font-body text-sm leading-snug text-black/60 sm:text-base lg:mx-0"
        >
          Do cítrico ao doce intenso, cada lata foi pensada para dar vontade do próximo gole.
        </motion.p>
      </div>

      {/* Horizontal Flex Container (Wrap on mobile, row on desktop) */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-6 lg:gap-8"
      >
        {sabores.map((sabor, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="group relative flex w-full max-w-[340px] flex-col items-center rounded-[28px] p-7 transition-shadow hover:shadow-2xl sm:w-[calc(50%-12px)] sm:max-w-[280px] sm:p-8 md:rounded-[40px] lg:w-[calc(25%-24px)]"
            style={{ backgroundColor: `${sabor.color}15` }} // 15% opacity background
          >
            {/* The Can */}
            <div className="relative mb-8 h-52 lg:h-40 w-full drop-shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:drop-shadow-2xl md:h-80">
              <Image
                src={sabor.img}
                alt={`Lata Sabor ${sabor.nome}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain"
              />
            </div>
            
            {/* Details */}
            <div className="text-center lg:text-left">
              <h3 className="mb-2 max-w-2xl font-display text-2xl lg:text-xl font-extrabold leading-[0.94] md:text-[2.6rem]" style={{ color: sabor.color }}>
                {sabor.nome}
              </h3>
              <p className="font-body text-sm font-medium text-black/60">
                {sabor.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
