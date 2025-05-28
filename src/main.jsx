import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Root from './Layout/Root';
import Home from './Page/Home';
import {

  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './Page/About';
import Contact from './Page/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,

  },

      {
        path: "/about",
        element:<About/> 

  },
      {
        path: "/contact",
        element:<Contact/> 

  },
]
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
