import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/Layout/MainLayout';
import Home from './components/Home/Home';
import About from './components/SharedPage/About/About';
import Contact from './components/SharedPage/Contact/Contact';
import Login from './components/SharedPage/Login/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      
    ],
  },
  {
    path: 'about',
    element: <About></About>
  },
  {
    path: 'contact',
    element: <Contact></Contact>
  },
  {
    path: 'login',
    element: <Login></Login>

  }

  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
