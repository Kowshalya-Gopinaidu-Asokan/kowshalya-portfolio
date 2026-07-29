import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import App from '@/App'
import '@/styles/globals.css'

const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element (#root) not found, check index.html')
}

createRoot(rootElement).render(
  <StrictMode>
    {/* reducedMotion="user" makes every Framer Motion animation in the app
        automatically respect the OS-level prefers-reduced-motion setting. */}
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MotionConfig>
  </StrictMode>
)
