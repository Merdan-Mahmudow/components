import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { Provider } from './components/ui/provider.tsx'
import './index.css'
import { SafeArea } from './components/SafeArea/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider >
      <SafeArea />
      <App />
    </Provider>
  </StrictMode>,
)
