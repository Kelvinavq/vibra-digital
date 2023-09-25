import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/Config.css'
import './styles/Swal.css'
import { Home } from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
