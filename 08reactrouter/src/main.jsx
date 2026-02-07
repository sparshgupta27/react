import { StrictMode } from 'react'
import React from 'react'
import ReactDOM  from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/about.jsx'
import Contact from './components/contact/contact.jsx'
import User from './components/user/user.jsx'
import Github, { githubInfoLoader } from './components/github/github.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
        {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'user/:userid',
        element:<User/>
      },
       {
        path: 'github',
        element:<Github/>,
        loader: githubInfoLoader
      }
        
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router} />
  </React.StrictMode>,
)
