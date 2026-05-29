'use client'
import type { CSSProperties } from 'react'
import { createContext, useContext, useRef } from 'react'

export const StickySectionContext = createContext<React.RefObject<HTMLDivElement | null> | null>(null)

export function useStickySection() {
  return useContext(StickySectionContext)
}

interface StickySectionProps {
  children: React.ReactNode
  zIndex: number
  bgColor?: string
  borderRadius?: string
  minHeight?: string
  scrollHeight?: string
}

export function StickySection({
  children,
  zIndex,
  bgColor = 'var(--cream)',
  borderRadius = '32px 32px 0 0',
  minHeight = '100vh',
  scrollHeight,
}: StickySectionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const panelStyle = {
    '--sticky-bg': bgColor,
    '--sticky-min-height': minHeight,
    '--sticky-mobile-radius': zIndex <= 10 ? '0' : '24px 24px 0 0',
    '--sticky-mobile-shadow':
      zIndex <= 10
        ? 'none'
        : '0 -8px 28px rgba(0,0,0,0.12), 0 -1px 4px rgba(0,0,0,0.08)',
    '--sticky-radius': zIndex <= 10 ? '0' : borderRadius,
    '--sticky-shadow':
      zIndex <= 10
        ? 'none'
        : '0 -12px 48px rgba(0,0,0,0.10), 0 -2px 8px rgba(0,0,0,0.06)',
    zIndex,
  } as CSSProperties

  return (
    <div
      ref={wrapperRef}
      className="sticky-scene"
      style={{
        height: scrollHeight,
        position: 'relative',
      }}
    >
      <section
        className="sticky-panel"
        style={panelStyle}
      >
        <StickySectionContext.Provider value={wrapperRef}>
          {children}
        </StickySectionContext.Provider>
      </section>
    </div>
  )
}
