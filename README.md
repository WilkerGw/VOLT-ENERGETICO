# VOLT - Scroll Portfolio Experience

Landing page conceitual criada para portfólio, com foco em direção visual, ritmo de scroll, transições sticky e animações expressivas para uma marca fictícia de bebida energética.

O projeto prioriza impacto visual e exploração de motion design no navegador. Performance, acessibilidade e responsividade são tratadas como suporte para a experiência, sem remover a complexidade intencional das animações.

## Stack

- Next.js 16 com App Router
- React 19
- Tailwind CSS 4
- Framer Motion para entradas, reveals e microinterações
- GSAP ScrollTrigger para sincronização com scroll
- Lenis para suavização do scroll
- next/image para otimização dos assets visuais
- Lucide React para ícones

## Direção de motion

A home é estruturada como uma sequência de cenas sticky. Cada seção entra por cima da anterior com radius, sombra e clip controlado para reforçar a sensação de páginas coreografadas, não apenas blocos empilhados.

O scroll suave usa Lenis integrado ao ticker do GSAP. Em usuários com `prefers-reduced-motion: reduce`, a suavização é desativada e o Framer Motion respeita a preferência do sistema, mantendo a experiência principal completa para quem não solicitou redução de movimento.

## Estrutura principal

- `app/page.tsx`: ordem narrativa das seções e alturas de scroll.
- `app/providers.tsx`: integração Lenis, GSAP e configuração global de motion.
- `app/globals.css`: tokens visuais, reset, estados de foco e estilos do sticky shell.
- `components/sections`: cenas principais da landing.
- `components/ui`: utilitários de motion, sticky, parallax, marquee e componentes reutilizáveis.
- `public/images`: assets WebP usados na composição visual.

## Scripts

```bash
npm run dev
npm run build
npm run lint
```

## Qualidade visual

Antes de publicar ou gravar o projeto para portfólio, valide:

- Hero em 390px, 768px e desktop amplo.
- Transições sticky durante scroll rápido e scroll lento.
- Cards de sabores e CTA duplo em mobile.
- Warnings do Next relacionados a imagens.
- `npm run lint` e `npm run build`.

