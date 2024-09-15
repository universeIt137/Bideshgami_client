import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import './App.css';
import "./assets/css/style.css"
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider, BrowserRouter } from 'react-router-dom'
import BasicRoutes from './routes/BasicRoutes.jsx';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Toaster } from 'react-hot-toast';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>

      <RouterProvider router={BasicRoutes} />

      <Toaster />
    </HelmetProvider>
  </React.StrictMode>,
)
