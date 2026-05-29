'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useState, useId } from 'react'

interface AccordionProps {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  const id = useId()

  return (
    <div className="border-b border-black/10 py-6">
      <button
        type="button"
        id={`accordion-button-${id}`}
        aria-controls={`accordion-content-${id}`}
        className="flex w-full items-center justify-between rounded-xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--green-volts)"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="font-body text-xl font-medium text-black md:text-2xl">
          {title}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: 'backOut' }}
          className="ml-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black text-white"
        >
          {/* Plus icon */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`accordion-content-${id}`}
            aria-labelledby={`accordion-button-${id}`}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.3, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
              },
            }}
            style={{ overflow: 'hidden' }}
          >
            <div className="pt-4 pb-2 pr-12 text-lg text-black/70">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
