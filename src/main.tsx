import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Header from './componentes/header/Header'
import Main from './componentes/main/Main'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
     <Header/>
     <Main/> 
     </>,
  },
  {
    path: "/notícias",
    element: <div>Página de Notícias</div>,
  },
  {
    path: "/sobre",
    element: <div>Página de sobre</div>,
  },
  {
    path: "/contato",
    element: <h1>Contact</h1>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)