import { createRoot } from 'react-dom/client'

import './styles/app.css'

import App from './App.tsx'

if (typeof window !== 'undefined') {
  window.addEventListener('vite:preloadError', () => {
    window.location.reload()
  })
}

const root = document.getElementById('root')
const reactRoot = createRoot(root!)

reactRoot.render(<App />)
