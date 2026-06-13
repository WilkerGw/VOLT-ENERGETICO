'use client'
import { motion } from 'framer-motion'
import { SplitHeadline } from '../ui/SplitHeadline'
import { staggerContainer, fadeUp } from '@/lib/variants'
import { MapPin } from 'lucide-react'

function VoltOfficialLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 92 34" className="h-8 w-[5.4rem]">
      <rect width="92" height="34" rx="17" fill="#F5F0E8" />
      <text
        x="13"
        y="23"
        fill="#1A1A1A"
        fontFamily="var(--font-display)"
        fontSize="21"
        fontWeight="900"
      >
        Volt
      </text>
      <circle cx="75" cy="17" r="7" fill="#7DB33A" />
      <path d="M72.5 17h5" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function AmazonLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 104 34" className="h-8 w-[6.1rem]">
      <text
        x="5"
        y="22"
        fill="#111111"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="22"
        fontWeight="700"
      >
        amazon
      </text>
      <path
        d="M28 27c15 7 37 5 54-5"
        fill="none"
        stroke="#FF9900"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path
        d="M78 22l7-.6-2.8 6.4"
        fill="none"
        stroke="#FF9900"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
      />
    </svg>
  )
}

function IFoodLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 82 34" className="h-8 w-[4.9rem]">
      <text
        x="4"
        y="24"
        fill="#EA1D2C"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="26"
        fontWeight="900"
      >
        iFood
      </text>
    </svg>
  )
}

function MercadoLivreLogo() {
  return (
    <svg aria-hidden="true" viewBox="0 0 78 34" className="h-8 w-[4.6rem]">
      <rect x="2" y="4" width="74" height="26" rx="13" fill="#FFE600" />
      <path
        d="M18 17c4.6-4.4 9.4-4.4 14 0 4.6-4.4 9.4-4.4 14 0"
        fill="none"
        stroke="#2D5DA8"
        strokeLinecap="round"
        strokeWidth="2.8"
      />
      <path
        d="M24 17l7 5.5c1.8 1.4 4.4 1.4 6.2 0L44 17"
        fill="none"
        stroke="#2D5DA8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.8"
      />
      <path
        d="M31.5 18.4l3.3 2.7 4.1-3.2"
        fill="none"
        stroke="#2D5DA8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  )
}

export function OndeEncontrarSection() {
  const partners = [
    { name: 'Loja Oficial', logo: <VoltOfficialLogo /> },
    { name: 'Amazon', logo: <AmazonLogo /> },
    { name: 'iFood', logo: <IFoodLogo /> },
    { name: 'Mercado Livre', logo: <MercadoLivreLogo /> },
  ]

  return (
    <section aria-labelledby="onde-encontrar-heading" className="flex min-h-screen items-center justify-center px-6 py-24 md:px-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center lg:items-start lg:text-left">

        {/* Animated Map Pin Mascot */}
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ type: 'spring', bounce: 0.6, duration: 1 }}
          className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-2xl"
        >
          <MapPin className="h-10 w-10 text-(--green-volts)" />
        </motion.div>

        <SplitHeadline
          tag="h2"
          text="A SUA PRÓXIMA VOLT\nPODE ESTAR MAIS PERTO\nDO QUE PARECE"
          className="mx-auto mb-16 max-w-2xl font-display text-2xl font-extrabold leading-[0.94] text-white sm:text-5xl md:text-[2.6rem] lg:mx-0"
        />

        {/* Partners Logos / Text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 flex flex-wrap justify-center gap-6 md:gap-12 lg:justify-start"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-sm transition-colors hover:bg-white/20 sm:px-6"
            >
              <span className="flex h-12 min-w-[5.8rem] items-center justify-center rounded-xl bg-white px-3 shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                {partner.logo}
              </span>
              <span className="font-display text-xl tracking-wide text-white">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
        >
          <button type="button" className="group relative overflow-hidden rounded-full bg-black px-10 py-5 text-white transition-transform hover:scale-105 active:scale-95">
            <span className="relative z-10 font-label text-lg font-bold">ENCONTRAR MINHA VOLT</span>
            <div className="absolute inset-0 z-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
