'use client'
import { AnimatedSection } from '../ui/AnimatedSection'
import { ParallaxLayer } from '../ui/ParallaxLayer'
import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'

export function UGCSection() {
  const images = [
    { src: '/images/atleta.webp', alt: 'Atleta' },
    { src: '/images/cadeira-praia.webp', alt: 'Praia' },
    { src: '/images/festa-praia.webp', alt: 'Festa' },
    { src: '/images/jovem-cozinha.webp', alt: 'Cozinha' },
    { src: '/images/jovem-sacada.webp', alt: 'Sacada' },
    { src: '/images/lata-montanha.webp', alt: 'Montanha' },
  ]

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  }

  return (
    <div className="min-h-screen px-4 py-24 md:px-12 lg:px-24">
      <AnimatedSection className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-block rounded-full border border-black/10 px-4 py-1.5 font-label text-sm text-black/60"
          >
            VIDA REAL
          </motion.div>
          <motion.h2 
            className="mx-auto max-w-2xl font-display text-2xl font-extrabold leading-[0.94] text-black sm:text-5xl md:text-[2.6rem]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            VOLT NA MÃO DE QUEM VIVE EM MOVIMENTO
          </motion.h2>
        </div>

        {/* 3-Column Masonry UGC Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
          
          {/* Column 1 - Medium Parallax */}
          <ParallaxLayer speed={0.1} className="flex flex-col gap-4 md:gap-6 lg:gap-8">
            <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-2xl pt-[130%]">
              <Image src={images[0].src} alt={images[0].alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </motion.div>
            <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-2xl pt-[100%]">
              <Image src={images[1].src} alt={images[1].alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </motion.div>
          </ParallaxLayer>

          {/* Column 2 - Normal speed */}
          <div className="flex flex-col gap-4 pt-12 md:gap-6 lg:gap-8">
             <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-2xl pt-[100%]">
               <Image src={images[2].src} alt={images[2].alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
             </motion.div>
             <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-2xl pt-[140%]">
               <Image src={images[3].src} alt={images[3].alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
             </motion.div>
          </div>

          {/* Column 3 - Fast Parallax (hidden on mobile) */}
          <ParallaxLayer speed={-0.1} className="hidden flex-col gap-4 md:flex md:gap-6 lg:gap-8">
             <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-2xl pt-[150%]">
              <Image src={images[4].src} alt={images[4].alt} fill sizes="33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </motion.div>
            <motion.div variants={itemVariants} className="group relative overflow-hidden rounded-2xl pt-[90%]">
              <Image src={images[5].src} alt={images[5].alt} fill sizes="33vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
            </motion.div>
          </ParallaxLayer>

        </div>
      </AnimatedSection>
    </div>
  )
}
