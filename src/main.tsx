import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UseMemo from './UseMemo'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UseMemo/>
  </StrictMode>,
)
