'use client'
import { motion } from 'framer-motion'
import { SplitHeadline } from '../ui/SplitHeadline'
import { Marquee } from '../ui/Marquee'

export function TestemunhosSection() {
  const testimonials = [
    { name: 'Lucas S.', handle: '@lucassilva_fit', text: 'Tomei gelada antes do treino e parecia refri, só que com intenção. Finalmente algo leve.', stars: 5 },
    { name: 'Marina C.', handle: '@marina.cross', text: 'Zero gosto de energético tradicional, zero textura grossa. Vontade real de tomar de novo.', stars: 5 },
    { name: 'Pedro H.', handle: '@pedro.run', text: 'Levo pra praia, pro trabalho, pra todo lado. É a primeira bebida funcional que combina comigo.', stars: 5 },
    { name: 'Juliana P.', handle: '@ju.pilates', text: 'Eu queria energia sem cara de obrigação. A VOLT entrou fácil na rotina.', stars: 5 },
    { name: 'Rafael O.', handle: '@rafael.iron', text: 'Citrus é absurdo. Gelado no meio do expediente dá aquele reset sem pesar.', stars: 5 },
    { name: 'Camila T.', handle: '@camila.surf', text: 'Gosto de drink, praticidade de lata e fórmula séria. Era exatamente o meio-termo que faltava.', stars: 5 },
  ]

  return (
    <section aria-labelledby="testemunhos-heading" className="flex min-h-screen flex-col justify-center overflow-hidden bg-white py-24">
      <div className="mx-auto mb-16 w-full max-w-4xl px-6 text-center md:px-12 lg:text-left">
        <SplitHeadline
          tag="h2"
          text="QUEM PROVOU ENTENDEU\nA DIFERENÇA"
          className="mx-auto max-w-2xl font-display text-2xl font-extrabold leading-[0.94] text-black sm:text-5xl md:text-[2.6rem] lg:mx-0"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <Marquee speed={40} direction="left">
          <div className="flex gap-6 py-8 pr-6">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="flex w-80 flex-col justify-between rounded-3xl border border-black/5 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
                style={{ transform: `rotate(${i % 2 === 0 ? '1deg' : '-1deg'})` }}
              >
                <div>
                  <div className="mb-4 flex text-(--green-volts)">
                    {[...Array(t.stars)].map((_, idx) => (
                      <svg key={idx} width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-body text-lg text-black/80">&ldquo;{t.text}&rdquo;</p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-(--cream) font-display text-xl text-black">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-body font-bold text-black">{t.name}</p>
                    <p className="font-body text-sm text-black/50">{t.handle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </motion.div>
    </section>
  )
}
