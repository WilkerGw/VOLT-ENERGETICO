export function StickyStack({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', overflow: 'visible' }}>
      {children}
    </div>
  )
}
