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
import SafetyTips from '../pages/customerSide/safetyTips/SafetyTips';
import AirTicket from '../pages/customerSide/airTicket/AirTicket';
import WorkPermit from '../pages/customerSide/WorkPermit/WorkPermit';
import UserProfile from '../pages/UserDashboard/UserProfile/UserProfile';
import UserDashBoardLayout from '../pages/UserDashboard/UserDashBoardLayout/UserDashBoardLayout';
import UserDashboard from '../pages/UserDashboard/UserDashboard/UserDashboard';
import ChangePassword from '../components/frontendComponents/UserAuth/ChangePassword';
import ChangePass from '../pages/UserDashboard/ChangePass/ChangePass';
import CheckApplication from '../pages/UserDashboard/CheckApplication/CheckApplication';
import Message from '../pages/UserDashboard/CheckApplication/Message/Message';
import MyBooking from '../pages/UserDashboard/MyBooking/MyBooking';
import HajjUmrah from '../pages/customerSide/hajjUmrah/HajjUmrah';

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
                path: '/work-permit',
                element: <WorkPermit />
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
            },
            {
                path: "/safety-tips",
                element: <SafetyTips></SafetyTips>
            },
            // air ticket related routes 
            {
                path: "/air-ticket",
                element: <AirTicket></AirTicket>
            },
            // Hajj umrah related routes 
            {
                path: "/hajj-umrah",
                element: <HajjUmrah></HajjUmrah>
            },

            {
                path: "/user-dashboard",
                element: <UserDashBoardLayout />,
                children: [
                    {
                        path: '/user-dashboard',
                        element: <UserDashboard />
                    },
                    {
                        path: 'my-account',
                        element: <UserProfile />
                    },
                    {
                        path: 'change-password',
                        element: <ChangePass />
                    },
                    {
                        path: 'checking-status',
                        element: <CheckApplication />
                    },
                    {
                        path: 'message',
                        element: <Message />
                    },
                    {
                        path: 'my-booking',
                        element: <MyBooking />
                    },
                ]
            },

        ]
    },


]);



export default BasicRoutes;