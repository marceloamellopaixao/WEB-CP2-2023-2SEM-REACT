import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './routes/Home/index.jsx'
import Historia from './routes/Historia/index.jsx'
import Episodios from './routes/Episodios/index.jsx'
import Serie_Quadrinhos from './routes/Serie_Quadrinhos/index.jsx'
import Contatos from './routes/Contatos/index.jsx'
import Error from './routes/Error/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/historia',
        element: <Historia/>
      },
      {
        path: '/episodios',
        element: <Episodios/>
      },
      {
        path: '/serie_quadrinhos',
        element: <Serie_Quadrinhos/>
      },
      {
        path: '/contatos',
        element: <Contatos/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
