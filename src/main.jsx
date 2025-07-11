import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Enrutador } from './enrutador/Enrutador.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(Enrutador)} />
  </StrictMode>,
)
