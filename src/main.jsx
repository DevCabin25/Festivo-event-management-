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
import Event from './Page/Event';
import CustomPlan from './Page/CustomPlan';

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
    path:"/events",
    element:<Event></Event>

  },
  {
    path:"/customplan",
    element:<CustomPlan/>

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
