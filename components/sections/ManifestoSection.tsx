'use client'

// Motion anima os blocos quando eles entram na tela.
import { motion } from 'framer-motion'
// Variantes de animacao reutilizadas no site: subida, grupo escalonado e revelacao de linha.
import { fadeUp, staggerContainer, lineReveal } from '@/lib/variants'
// Wrapper que controla a animacao de entrada da secao inteira.
import { AnimatedSection } from '../ui/AnimatedSection'
// Componente otimizado do Next.js para imagens responsivas.
import Image from 'next/image'

// Secao Manifesto: bloco editorial com imagem/mascote a esquerda e texto a direita.
export function ManifestoSection() {
  return (
    // Container principal da secao.
    // - aria-labelledby aponta para o h2 do manifesto.
    // - min-h-screen faz a area ocupar pelo menos a altura da tela.
    // - bg-[var(--cream)] aplica o fundo creme definido nas variaveis globais.
    <section
      aria-labelledby="manifesto-heading"
      className="relative w-full min-h-screen flex items-center justify-center py-16 px-6 lg:px-24 overflow-hidden bg-[var(--cream)]"
    >
      {/* Forma organica verde no fundo da secao, posicionada atras de todo o conteudo. */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15 overflow-hidden">
        {/* SVG grande deslocado para o canto superior esquerdo. */}
        <svg
          className="absolute -left-20 -top-20 w-[600px] h-[600px]"
          viewBox="0 0 400 400"
          fill="none"
        >
          {/* Desenho da mancha organica de fundo. Altere o d="" para mudar a forma. */}
          <path
            d="M 120,40 C 200,-20 280,30 330,100 C 380,170 340,260 290,320 C 240,380 140,390 80,340 C 20,290 -20,200 10,130 C 40,60 70,80 120,40 Z"
            fill="#839F63"
          />
        </svg>
      </div>

      {/* Conteudo animado centralizado: vira coluna no mobile e duas colunas no desktop. */}
      <AnimatedSection className="relative z-10 mx-auto w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Coluna esquerda: agrupa a imagem principal, o contorno decorativo e o mascote. */}
        <div className="relative flex w-full items-center justify-center pb-24 lg:w-1/2 lg:pb-0">
          {/* Contorno organico tracejado atras do card da imagem. */}
          <div className="absolute -left-10 -top-10 w-[110%] h-[110%] z-0 pointer-events-none opacity-30"></div>

          {/* Card principal da imagem das latas. */}
          <motion.div
            // fadeUp faz o card aparecer subindo suavemente.
            variants={fadeUp}
            // Tamanho, bordas arredondadas, sombra e camada acima do contorno decorativo.
            className="relative z-10 h-[400px] w-[400px] overflow-hidden rounded-[36px] border-4 border-white/20 bg-[#C5D8B0] shadow-2xl lg:h-[460px] lg:w-[460px]"
          >
            {/* Imagem principal dentro do card. Troque o src para mudar a foto. */}
            <Image
              src="/images/latas-empilhadas.webp"
              alt="Latas empilhadas de energético VOLT"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Mascote sobreposto na parte inferior direita do card. */}
          <motion.div
            // Estado inicial da animacao do mascote: invisivel, mais baixo e menor.
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            // Estado final quando aparece na viewport.
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            // once: true evita repetir a animacao toda vez que rolar a pagina.
            viewport={{ once: true }}
            // Configura o efeito de mola, atraso e duracao da entrada.
            transition={{ type: 'spring', bounce: 0.4, delay: 0.5, duration: 0.8 }}
            // Posicionamento absoluto em relacao a coluna esquerda.
            className="absolute bottom-2 right-4 z-20 scale-75 lg:right-4 lg:scale-110"
          >
            {/* Imagem do mascote. Troque o src para usar outra pose. */}
            <Image
              src="/images/mascote-1.webp"
              alt="Mascote animado andando"
              width={120}
              height={120}
              className="h-auto w-auto"
            />
          </motion.div>
        </div>

        {/* Coluna direita: conteudo editorial do manifesto. */}
        <div className="z-20 flex max-w-xl flex-grow flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
          {/* Tag pequena acima do titulo. */}
          <motion.div
            // Usa a mesma animacao fadeUp para entrar junto com o restante do texto.
            variants={fadeUp}
            // Fonte pequena, uppercase e verde oliva.
            className="section-kicker inline-block text-[var(--olive)] select-none"
          >
            Saúde que nasce do prazer, não da culpa
          </motion.div>

          {/* Titulo principal do manifesto, separado em linhas para controlar a animacao. */}
          <motion.h2
            // Este id conversa com aria-labelledby no <section>.
            id="manifesto-heading"
            // O titulo comeca oculto e revela as linhas quando entra na tela.
            initial="hidden"
            whileInView="visible"
            // margin antecipa um pouco o disparo da animacao antes do h2 ficar totalmente visivel.
            viewport={{ once: true, margin: '-60px' }}
            // staggerContainer anima os filhos em sequencia.
            variants={staggerContainer}
            // Classes de tipografia, espacamento e responsividade do titulo.
            className="section-title text-[1.7rem] lg:text-[2rem] my-6 lg:my-4 lg:max-w-[80%]"
          >
            {/* Primeira linha do titulo. O span externo esconde o texto enquanto ele revela. */}
            <span style={{ display: 'block', overflow: 'hidden' }}>
              {/* lineReveal faz esta linha deslizar/aparecer. */}
              <motion.span style={{ display: 'block' }} variants={lineReveal}>
                {/* Palavra destacada em verde oliva dentro da primeira linha. */}
                Tudo que é
                <span className="font-extrabold text-[var(--olive)]">&quot;saudável&quot;</span>
              </motion.span>
            </span>
            {/* Segunda linha do titulo, com a mesma estrutura de revelacao. */}
            <span style={{ display: 'block', overflow: 'hidden' }}>
              <motion.span style={{ display: 'block' }} variants={lineReveal}>
                vem embalado em culpa e restrição.
              </motion.span>
            </span>
          </motion.h2>

          {/* Bloco dos paragrafos do manifesto. */}
          <motion.div
            // O bloco inteiro aparece com fadeUp depois do titulo.
            variants={fadeUp}
            // space-y-2 cria um respiro menor entre os paragrafos.
            className="space-y-2 section-copy text-black/75 lg:max-w-[73%]"
          >
            quebrar isso. Não é sobre contar calorias o tempo todo. melhor com energia, presença e
            prazer e deixar a saúde ser a consequência natural dessa rotina. simples: trocar o
            refri, o whey, a água com gás por algo que te faz bem por dentro e por fora.
          </motion.div>
        </div>
      </AnimatedSection>
    </section>
  )
}
