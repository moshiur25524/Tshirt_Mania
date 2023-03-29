
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Main from './components/Layout/Main'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: ([
        { 
          path: '/',
          loader: async() => fetch('tshirts.json'),
           element: <Home /> 
          },
        { path: '/about', element: <About /> },
        { path: '/contact', element: <Contact /> },
      ])
    }
  ])

  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
