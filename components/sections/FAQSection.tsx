'use client'
import { motion } from 'framer-motion'
import { SplitHeadline } from '../ui/SplitHeadline'
import { Accordion } from '../ui/Accordion'
import { staggerContainer, fadeUp } from '@/lib/variants'

export function FAQSection() {
  const faqs = [
    {
      q: 'Qual a quantidade ideal por dia?',
      a: 'Comece com uma lata e sinta como ela encaixa no seu ritmo. A ideia é energia leve, prazerosa e fácil de repetir sem virar ritual complicado.',
    },
    {
      q: 'Quais os principais ingredientes?',
      a: 'A fórmula combina água gaseificada, 30mg de cafeína, taurina, CoQ10 e vitaminas. É o lado funcional da lata, sem abrir mão do gosto de bebida gelada.',
    },
    {
      q: 'Posso tomar antes do treino?',
      a: 'Sim. Ela foi pensada para entrar antes do treino, depois do treino ou no meio do dia, quando você quer energia sem peso no estômago.',
    },
    {
      q: 'Como é o sabor?',
      a: 'Pensa em algo leve, gaseificado e refrescante, mais perto de um refri gelado do que de um suplemento pesado.',
    },
    {
      q: 'Tem açúcar?',
      a: 'Não. A VOLT mantém a proposta de prazer sem entrar na lógica de açúcar, culpa e calorias vazias.',
    },
    {
      q: 'É vegano?',
      a: 'Sim. A fórmula usa ingredientes de origem vegetal ou sintética, mantendo a experiência simples, leve e sem ingredientes de origem animal.',
    },
  ]

  return (
    <section aria-labelledby="faq-heading" className="flex min-h-screen items-center justify-center px-6 py-24 md:px-12">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 lg:flex-row lg:items-start">

        {/* Left: Headline & Sticker */}
        <div className="relative flex-1 lg:sticky lg:top-32">
          <SplitHeadline
            tag="h2"
            text="ANTES DE ABRIR A LATA,\nTIRA ESSAS DÚVIDAS"
            className="mb-8 max-w-2xl font-display text-2xl font-extrabold leading-[0.94] text-black sm:text-5xl md:text-[2.6rem]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 15 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', bounce: 0.5, delay: 0.4 }}
            className="hidden h-32 w-32 items-center justify-center rounded-full bg-(--green-volts) font-display text-2xl text-white shadow-lg lg:flex"
          >
            FAQ
          </motion.div>
        </div>

        {/* Right: Accordion List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex-[1.5]"
        >
          {faqs.map((faq, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Accordion title={faq.q} defaultOpen={i === 0}>
                <p>{faq.a}</p>
              </Accordion>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
