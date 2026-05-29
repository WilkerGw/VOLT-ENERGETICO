'use client'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/variants'
import { Camera, Store } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="flex min-h-screen flex-col justify-between bg-black px-6 py-12 md:px-12 lg:px-24">

      {/* Top Half: Partnership Cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mt-12 flex w-full flex-col gap-6 md:flex-row"
      >
        {/* Influencer Card */}
        <motion.div
          variants={fadeUp}
          className="group flex flex-1 flex-col items-start justify-between rounded-3xl border border-white/10 bg-white/5 p-10 transition-colors hover:border-(--green-volts) hover:bg-white/10"
        >
          <div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-(--green-volts) shadow-lg">
              <Camera className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-4 max-w-2xl font-display text-2xl font-extrabold leading-[0.94] text-white sm:text-5xl md:text-[2.6rem]">QUERO LEVAR A ONDA COMIGO</h3>
            <p className="font-body text-white/70">Crie conteúdo, conte sua rotina e ajude a energia leve a chegar mais longe.</p>
          </div>
          <button type="button" className="mt-12 font-label text-sm font-bold text-(--green-volts) underline transition-colors group-hover:text-white">
            ENTRAR NA ONDA →
          </button>
        </motion.div>

        {/* Franchise Card */}
        <motion.div
          variants={fadeUp}
          className="group flex flex-1 flex-col items-start justify-between rounded-3xl border border-white/10 bg-white/5 p-10 transition-colors hover:border-(--green-volts) hover:bg-white/10"
        >
          <div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-(--green-volts) shadow-lg">
              <Store className="h-8 w-8 text-white" />
            </div>
            <h3 className="mb-4 max-w-2xl font-display text-2xl font-extrabold leading-[0.94] text-white sm:text-5xl md:text-[2.6rem]">QUERO COLOCAR VOLT NA MINHA LOJA</h3>
            <p className="font-body text-white/70">Leve uma bebida funcional, bonita e fácil de desejar para seus clientes.</p>
          </div>
          <button type="button" className="mt-12 font-label text-sm font-bold text-(--green-volts) underline transition-colors group-hover:text-white">
            SEJA UM REVENDEDOR →
          </button>
        </motion.div>
      </motion.div>

      {/* Bottom Half: Links & Copyright */}
      <div className="mt-24 border-t border-white/10 pt-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          <div className="font-display text-4xl tracking-widest text-white">
            VOLT
          </div>

          <div className="flex gap-8 font-label text-xs text-white/60">
            <a href="#" className="hover:text-white">Termos de Uso</a>
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Contato</a>
          </div>

          <div className="font-body text-sm text-white/50">
            © {new Date().getFullYear()} VOLT Bebida Energética. Todos os direitos reservados.
          </div>

        </div>
      </div>
    </footer>
  )
}
