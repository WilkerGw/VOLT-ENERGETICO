'use client'
import { AnimatedSection } from '../ui/AnimatedSection'
import { ParallaxLayer } from '../ui/ParallaxLayer'
import { motion, type Variants } from 'framer-motion'
import { fadeUp } from '@/lib/variants'
import Image from 'next/image'

export function GaleriaSection() {
  const images = [
    { src: '/images/atleta.webp', alt: 'Atleta em parque' },
    { src: '/images/cadeira-praia.webp', alt: 'Garota na encosta com lata' },
    { src: '/images/festa-praia.webp', alt: 'Grupo de amigos se divertindo' },
    { src: '/images/jovem-cozinha.webp', alt: 'Jovem na cozinha tomando energético' },
    { src: '/images/jovem-sacada.webp', alt: 'Jovem na sacada ao pôr do sol' },
  ]

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  }

  return (
    <section
      aria-labelledby="galeria-heading"
      className="relative min-h-screen overflow-hidden bg-[var(--cream)]"
    >
      {/* Background Left Wave Shape */}
      <div className="absolute left-0 top-0 bottom-0 w-[20vw] z-0 opacity-15 pointer-events-none hidden lg:block">
        <svg className="w-full h-full" viewBox="0 0 200 800" fill="none" preserveAspectRatio="none">
          <path d="M 0,0 C 120,150 160,300 110,450 C 60,600 100,700 0,800 Z" fill="#839F63" />
        </svg>
      </div>

      {/* Background Right Wave Shape */}
      <div className="absolute right-0 top-0 bottom-0 w-[20vw] z-0 opacity-15 pointer-events-none hidden lg:block">
        <svg className="w-full h-full" viewBox="0 0 200 800" fill="none" preserveAspectRatio="none">
          <path d="M 200,0 C 80,150 40,300 90,450 C 140,600 100,700 200,800 Z" fill="#839F63" />
        </svg>
      </div>

      <AnimatedSection className="relative z-10 mx-auto max-w-7xl p-4 lg:p-8">
        {/* Header Block with Reading Mascot */}
        <div className="relative mx-auto mb-4 flex max-w-5xl flex-col items-center justify-center gap-8 md:flex-row md:gap-12 lg:mx-0 lg:justify-start">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Top Tag */}
            <motion.div
              variants={fadeUp}
              className="section-kicker text-[var(--olive)] select-none"
            >
              A VOLT é pra quem
            </motion.div>

            {/* Main Title */}
            <motion.h2
              id="galeria-heading"
              className="section-title text-[1.7rem] lg:text-[2rem] my-6 lg:my-4
 text-black lg:max-w-[73%]"
              variants={fadeUp}
            >
              Sinta o que te eleva, a Volt foi feita pra você.
            </motion.h2>

            {/* Subtitle */}
            <motion.p className="lg:max-w-[60%] section-lead text-black/65" variants={fadeUp}>
              Se você quer um corpo forte, uma mente leve e uma rotina possível, essa é a sua onda.
            </motion.p>
          </div>

          {/* Whimsical Mascot Reading Book */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', bounce: 0.4, delay: 0.3 }}
            className="shrink-0 scale-90 sm:scale-100 lg:scale-105"
          >
            <Image
              src="/images/mascote-5.webp"
              alt="Mascote lendo um livro"
              width={200}
              height={200}
              className="h-50 w-auto"
            />
          </motion.div>
        </div>

        {/* Layout responsivo com Flexbox e colunas em parallax */}
        <div className="flex w-full lg:w-[80%] lg:mx-auto flex-col gap-6 sm:flex-row sm:flex-wrap lg:flex-nowrap lg:gap-8">
          {/* Column 1 - Guy on Bench (Slow Parallax) */}
          <ParallaxLayer
            speed={0.03}
            className="flex w-full flex-col sm:w-[calc(50%-0.75rem)] lg:w-auto lg:flex-1"
          >
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-[32px] md:rounded-[40px] pt-[140%] shadow-xl group border border-black/5"
            >
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                quality={75}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                <p className="caption-copy text-center text-white/95 lg:text-left">
                  Treina, mas não se enxerga como &quot;marombeiro de laboratório&quot;.
                </p>
              </div>
            </motion.div>
          </ParallaxLayer>

          {/* Column 2 - Guy on Terrace (Normal speed) */}
          <div className="flex w-full flex-col sm:w-[calc(50%-0.75rem)] lg:w-auto lg:flex-1">
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-[32px] md:rounded-[40px] pt-[140%] shadow-xl group border border-black/5"
            >
              <Image
                src={images[4].src}
                alt={images[4].alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                quality={75}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                <p className="caption-copy text-center text-white/95 lg:text-left">
                  Trabalha muito, mas não quer abrir mão do próprio corpo e da cabeça no lugar.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Column 3 - Double split Column (Fast Parallax) */}
          <ParallaxLayer
            speed={-0.03}
            className="flex w-full flex-col gap-6  lg:w-auto lg:flex-1 lg:gap-8"
          >
            {/* Top smaller visual card */}
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-[24px] md:rounded-[32px] pt-[50%] shadow-md group border border-black/5"
            >
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                quality={75}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

            {/* Bottom standard visual card */}
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-[32px] md:rounded-[40px] pt-[100%] shadow-xl group border border-black/5"
            >
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                quality={75}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                <p className="caption-copy text-center text-white/95 lg:text-left">
                  Ama praia, trilha, esportes, festival, cidade, rooftop e quer uma bebida que
                  combine com esse lifestyle.
                </p>
              </div>
            </motion.div>
          </ParallaxLayer>

          {/* Column 4 - Guy in Kitchen (Normal speed / Slightly offset) */}
          <div className="flex w-full flex-col sm:w-[calc(50%-0.75rem)] lg:w-auto lg:flex-1 lg:pt-8">
            <motion.div
              variants={itemVariants}
              className="relative overflow-hidden rounded-[32px] md:rounded-[40px] pt-[140%] shadow-xl group border border-black/5"
            >
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                quality={75}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                <p className="caption-copy text-center text-white/95 lg:text-left">
                  Cansou de whey grosso, shaker fedido e rituais complicados.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
