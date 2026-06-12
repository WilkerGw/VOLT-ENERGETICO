import { StickyStack } from '@/components/ui/StickyStack'
import { StickySection } from '@/components/ui/StickySection'

import { HeroSection } from '@/components/sections/HeroSection'
import { ManifestoSection } from '@/components/sections/ManifestoSection'
import { GaleriaSection } from '@/components/sections/GaleriaSection'
import { PropostaSection } from '@/components/sections/PropostaSection'
import { HeroProdutoSection } from '@/components/sections/HeroProdutoSection'
import { SaboresSection } from '@/components/sections/SaboresSection'
import { FormulaSection } from '@/components/sections/FormulaSection'
import { RotinaSection } from '@/components/sections/RotinaSection'
import { UGCSection } from '@/components/sections/UGCSection'
import { CTADuploSection } from '@/components/sections/CTADuploSection'
import { TestemunhosSection } from '@/components/sections/TestemunhosSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { OndeEncontrarSection } from '@/components/sections/OndeEncontrarSection'
import { CTAFinalSection } from '@/components/sections/CTAFinalSection'
import { FooterSection } from '@/components/sections/FooterSection'
import { ScrollToTop } from '@/components/ui/ScrollToTop'

export default function Home() {
  return (
    <>
      <main aria-label="page" className="w-full">
        <StickyStack>
          
          {/* 1. Hero */}
          <StickySection zIndex={10} bgColor="var(--cream)" scrollHeight="150vh">
            <HeroSection />
          </StickySection>

          {/* 2. Manifesto */}
          <StickySection zIndex={20} bgColor="var(--cream)" scrollHeight="120vh">
            <ManifestoSection />
          </StickySection>

          {/* 3. Galeria Lifestyle */}
          <StickySection zIndex={30} bgColor="var(--cream)" scrollHeight="150vh">
            <GaleriaSection />
          </StickySection>

          {/* 4. Proposta de Valor */}
          <StickySection zIndex={40} bgColor="#d9e979" scrollHeight="150vh">
            <PropostaSection />
          </StickySection>

          {/* 5. Hero Produto */}
          <StickySection zIndex={50} bgColor="var(--cream)" scrollHeight="130vh">
            <HeroProdutoSection />
          </StickySection>

          {/* 6. Sabores */}
          <StickySection zIndex={60} bgColor="var(--cream)" scrollHeight="140vh">
            <SaboresSection />
          </StickySection>

          {/* 7. Fórmula Inteligente */}
          <StickySection zIndex={70} bgColor="#FFFFFF" scrollHeight="120vh">
            <FormulaSection />
          </StickySection>

          {/* 8. Rotina */}
          <StickySection zIndex={80} bgColor="var(--olive)" scrollHeight="130vh">
            <RotinaSection />
          </StickySection>

          {/* 9. UGC (Vida Real) */}
          <StickySection zIndex={90} bgColor="var(--cream)" scrollHeight="180vh">
            <UGCSection />
          </StickySection>

          {/* 10. CTA Duplo */}
          <StickySection zIndex={100} bgColor="var(--cream)" scrollHeight="130vh">
            <CTADuploSection />
          </StickySection>

          {/* 11. Testemunhos */}
          <StickySection zIndex={110} bgColor="#FFFFFF" scrollHeight="100vh">
            <TestemunhosSection />
          </StickySection>

          {/* 12. FAQ */}
          <StickySection zIndex={120} bgColor="var(--cream)" scrollHeight="130vh">
            <FAQSection />
          </StickySection>

          {/* 13. Onde Encontrar */}
          <StickySection zIndex={130} bgColor="var(--green-volts)" scrollHeight="120vh">
            <OndeEncontrarSection />
          </StickySection>

          {/* 14. CTA Final */}
          <StickySection zIndex={140} bgColor="var(--cream)" scrollHeight="120vh">
            <CTAFinalSection />
          </StickySection>

          {/* 15. Footer (Scroll Normal, no extra height to hold sticky) */}
          <StickySection zIndex={150} bgColor="var(--green-dark)" scrollHeight="100vh">
            <FooterSection />
          </StickySection>

        </StickyStack>
      </main>

      <ScrollToTop />
    </>
  )
}
