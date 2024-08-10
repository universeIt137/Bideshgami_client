import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import './App.css';
import "./assets/css/style.css"
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import BasicRoutes from './routes/BasicRoutes.jsx';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={ BasicRoutes } />
    </HelmetProvider>
  </React.StrictMode>,
)
