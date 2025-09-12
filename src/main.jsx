import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SeasonProvider } from './contexts/SeasonContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SeasonProvider>
      <App />
    </SeasonProvider>
  </StrictMode>,
)
