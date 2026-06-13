'use client'
import { motion } from 'framer-motion'
import { SplitHeadline } from '../ui/SplitHeadline'
import { BlobShape } from '../ui/BlobShape'

export function CTAFinalSection() {
  return (
    <section aria-labelledby="cta-final-heading" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24 text-center md:px-12 lg:text-left">

      {/* Decorative Blob moving upwards slowly */}
      <BlobShape
        color="var(--green-light)"
        size={800}
        className="-bottom-60 left-1/2 -translate-x-1/2"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <SplitHeadline
          tag="h2"
          text="SE A SUA VIDA JÁ TEM RITMO,\nFALTA UMA BEBIDA\nQUE ACOMPANHE"
          className="mx-auto mb-12 max-w-2xl font-display text-2xl font-extrabold leading-[0.94] text-black sm:text-5xl md:text-[2.6rem] lg:mx-0"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center lg:justify-start"
        >
          <button type="button" className="group relative overflow-hidden rounded-full bg-(--green-dark) px-12 py-6 text-white shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl active:translate-y-1">
            <span className="relative z-10 font-label text-xl font-bold">QUERO MINHA VOLT</span>
            {/* Glowing effect inside button */}
            <div className="absolute inset-0 z-0 animate-pulse bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
