import { useState } from 'react'
import RichBackground from './components/RichBackground'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Editions from './components/Editions'
import type {Edition} from './components/types'

function App() {
  const [selectedId, setSelectedId] = useState<Edition['id']>('deluxe')

  return (
    <>
    <main className='relative min-h-screen bg-background text-foreground font-sans overflow-x-hidden'>
      <RichBackground />
      <div
        className="fixed inset-0 w-full h-full opacity-[0.04] pointer-events-none z-50 mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/></svg>\")",
        }}
      />
      <Navbar />
      <Hero />
      <Features />
      <Editions 
        selectedId={selectedId} 
        onSelect={setSelectedId}
      />
    </main>
    </>
  )
}

export default App
