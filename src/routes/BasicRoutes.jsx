import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import VisaDetails from '../pages/customerSide/VisaDetails/VisaDetails';
import Homepage from '../pages/homePage/Homepage';
import LoginPage from '../pages/UserPage/LoginPage';
import ForgetPasswordPage from '../pages/UserPage/ForgetPasswordPage';
import ChangePasswordPage from '../pages/UserPage/ChangePasswordPage';
import OtpPage from '../pages/UserPage/OtpPage';
import SuccessfullyPassPage from '../pages/UserPage/SuccessfullyPassPage';

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
        path: "/login",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            }
        ]
    },
    {
        path: "/forgot-password",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/forgot-password',
                element: <ForgetPasswordPage></ForgetPasswordPage>
            }
        ]
    },
    {
        path: "/change-password",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/change-password',
                element: <ChangePasswordPage></ChangePasswordPage>
            }
        ]
    },
    {
        path: "/OTP-code",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/OTP-code',
                element: <OtpPage></OtpPage>
            }
        ]
    },
    {
        path: "/successfully_Pass_change",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/successfully_Pass_change',
                element: <SuccessfullyPassPage></SuccessfullyPassPage>
            }
        ]
    },
]);



export default BasicRoutes;