import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './components/layout/Root.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Registration from './components/Registration/Registration.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,

    children:[
      {
        index: true,
        Component:Home
      },
      {
        path:'login',
        Component:Login
      },
      {
        path:'registration',
        Component:Registration
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
