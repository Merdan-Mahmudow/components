import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import './index.css'
import { routeTree } from './routeTree.gen'
import { Provider } from './components/ui/provider'
import { StatusBarSync } from './components/SafeArea'
import LogRocket from 'logrocket';

LogRocket.init('4iybf7/pizzetto');

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}


const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
      <Provider >
        <StatusBarSync />
        <RouterProvider router={router} />
      </Provider>
    </StrictMode>,
  )
}
