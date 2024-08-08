import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Homepage from '../pages/customerSide/homePage/Homepage';
import VisaDetails from '../pages/customerSide/VisaDetails/VisaDetails';

const BasicRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Homepage></Homepage>
            },
            {
                path: "/visaDetails",
                element: <VisaDetails />
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