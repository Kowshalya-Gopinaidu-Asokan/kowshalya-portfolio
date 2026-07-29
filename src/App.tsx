import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { LoadingScreen } from '@/components/loading/LoadingScreen'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { SkipLink } from '@/components/layout/SkipLink'
import { CommandPalette } from '@/components/ui/CommandPalette'
import { DevConsole } from '@/components/easterEgg/DevConsole'
import { KonamiEasterEgg } from '@/components/easterEgg/KonamiEasterEgg'
import { HomePage } from '@/routes/HomePage'
import { NotFound } from '@/routes/NotFound'

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  return (
    <>
      <DevConsole />
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <SkipLink />
          <CommandPalette />
          <KonamiEasterEgg />
          <Nav />
          <main id="main-content">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </main>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
