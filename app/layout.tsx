import type { Metadata } from "next";
import "./globals.css";
import { AnimationProvider } from "./providers";

export const metadata: Metadata = {
  title: "VOLT — A Energia em Lata Que Vive no Mesmo Ritmo Que Você",
  description:
    "Bebida energética em lata com 30mg de cafeína, taurina, CoQ10 e vitaminas. Sabor de refri, séria como seu treino. No Guilt, Just Pleasure.",
  keywords: "volt, energia, bebida energética, lata, taurina, fitness, sem açúcar, foco, cafeína",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="antialiased" suppressHydrationWarning>
      <body
        className="min-h-screen"
        style={{ fontFamily: "var(--font-body)", background: "var(--cream)" }}
        suppressHydrationWarning
      >
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
