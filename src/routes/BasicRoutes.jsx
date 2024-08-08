import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Homepage from '../pages/customerSide/homePage/Homepage';

const BasicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/", 
                element: <Homepage></Homepage>
            }
        ]
    },
    {
        path: "/dps",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/dps',
                element: <Homepage></Homepage>
            }
        ]
    }
]);

    

export default BasicRoutes;