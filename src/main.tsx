import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { Provider } from './components/ui/provider.tsx'
import './index.css'
import { StatusBarSync } from './components/SafeArea/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider >
      <StatusBarSync />
      <App />
    </Provider>
  </StrictMode>,
)
