import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
// To drzewo tras jest generowane automatycznie, nie przejmuj się jeśli edytor pokazuje tu błąd
import { routeTree } from './routeTree.gen'
import './styles.css'

const router = createRouter({ routeTree })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
