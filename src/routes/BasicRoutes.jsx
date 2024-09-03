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
import AboutUs from '../pages/customerSide/AboutUs/AboutUs';
import PrivacyPage from '../pages/customerSide/privacyPage/PrivacyPage';
import ApplyForm from '../pages/customerSide/applyForm/ApplyForm';
import ServicePage from '../pages/customerSide/servicePage/ServicePage';
import QRpage from '../pages/customerSide/qrPage/QRpage';
import RefundPolicy from '../pages/customerSide/refundPolicy/RefundPolicy';
import TermCondition from '../pages/customerSide/termCondition/TermCondition';

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
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/forgot-password',
                element: <ForgetPasswordPage></ForgetPasswordPage>
            },
            {
                path: '/change-password',
                element: <ChangePasswordPage></ChangePasswordPage>
            },
            {
                path: '/OTP-code',
                element: <OtpPage></OtpPage>
            },
            {
                path: '/successfully_Pass_change',
                element: <SuccessfullyPassPage></SuccessfullyPassPage>
            },
            {
                path: '/about-us',
                element: <AboutUs />
            },
            {
                path: "/privacy",
                element: <PrivacyPage></PrivacyPage>
            },
            {
                path: "/apply-form",
                element: <ApplyForm></ApplyForm>
            },
            {
                path: "/service-details",
                element: <ServicePage></ServicePage>
            },
            {
                path: "/qr-page",
                element: <QRpage></QRpage>
            },
            {
                path: "/refund-policy",
                element: <RefundPolicy></RefundPolicy>
            },
            {
                path: "/term-condition",
                element: <TermCondition></TermCondition>
            }

        ]
    },


]);



export default BasicRoutes;