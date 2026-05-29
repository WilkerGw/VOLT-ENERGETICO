'use client'
import { motion } from 'framer-motion'
import { SplitHeadline } from '../ui/SplitHeadline'
import { staggerContainer, fadeUp } from '@/lib/variants'
import { MapPin, ShoppingCart, Package, Bike, Handshake } from 'lucide-react'

export function OndeEncontrarSection() {
  const partners = [
    { name: 'Loja Oficial', icon: <ShoppingCart className="h-6 w-6 text-(--green-volts)" /> },
    { name: 'Amazon', icon: <Package className="h-6 w-6 text-(--green-volts)" /> },
    { name: 'iFood', icon: <Bike className="h-6 w-6 text-(--green-volts)" /> },
    { name: 'Mercado Livre', icon: <Handshake className="h-6 w-6 text-(--green-volts)" /> },
  ]

  return (
    <section aria-labelledby="onde-encontrar-heading" className="flex min-h-screen items-center justify-center px-6 py-24 md:px-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">

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
          className="mx-auto mb-16 max-w-2xl font-display text-2xl font-extrabold leading-[0.94] text-white sm:text-5xl md:text-[2.6rem]"
        />

        {/* Partners Logos / Text */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 flex flex-wrap justify-center gap-6 md:gap-12"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-center gap-3 rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <span className="flex h-10 w-10 items-center justify-center">{partner.icon}</span>
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
