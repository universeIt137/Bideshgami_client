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
import UserProfile from '../pages/UserDashboard/UserProfile/UserProfile';
import UserDashBoardLayout from '../pages/UserDashboard/UserDashBoardLayout/UserDashBoardLayout';
import UserDashboard from '../pages/UserDashboard/UserDashboard/UserDashboard';
import ChangePassword from '../components/frontendComponents/UserAuth/ChangePassword';
import ChangePass from '../pages/UserDashboard/ChangePass/ChangePass';
import CheckApplication from '../pages/UserDashboard/CheckApplication/CheckApplication';
import Message from '../pages/UserDashboard/CheckApplication/Message/Message';
import MyBooking from '../pages/UserDashboard/MyBooking/MyBooking';
import HajjUmrah from '../pages/customerSide/hajjUmrah/HajjUmrah';
import HajjUmrahDetails from '../pages/customerSide/hajjUmrah/HajjUmrahDetails';
import WorkPermitDetails from '../pages/customerSide/WorkPermit/WorkPermitDetails';
import WorkPermit from '../pages/customerSide/WorkPermit/WorkPermit';
import ApplyForm2 from '../pages/customerSide/applyForm/ApplyForm2';
import VideosSection from '../pages/customerSide/videosPage/VideosSection';
import VideoDetails from '../pages/customerSide/videosPage/VideoDetails';
import TourPackages from '../pages/customerSide/tourPackageRelatedPages/TourPackages';
import TourPackageDetails from '../pages/customerSide/tourPackageRelatedPages/packageDetails/TourPackageDetails';
import CustomizedTour from '../pages/customerSide/tourPackageRelatedPages/customizeTour/CustomizedTour';
import StudentPackage from '../pages/customerSide/studentPackage/StudentPackage';
import StudentPackageDetails from '../pages/customerSide/studentPackage/studentPackageDetails/StudentPackageDetails';
import AirTicketBookNow from '../pages/customerSide/airTicket/bookNowRelatedPages/AirTicketBookNow';

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
                element: <ApplyForm2></ApplyForm2>
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

            // work permit related routes 
            {
                path: '/work-permit',
                element: <WorkPermit></WorkPermit>
             },

             {
                path: '/work-permit-details',
                element: <WorkPermitDetails />
            },

            // air ticket related routes 
            {
                path: "/air-ticket",
                element: <AirTicket></AirTicket>
            },

            {
                path: "/air-ticket/book-now",
                element: <AirTicketBookNow></AirTicketBookNow>
            },

            // Hajj umrah related routes 
            {
                path: "/hajj-umrah",
                element: <HajjUmrah></HajjUmrah>
            },
            {
                path: "/hajj-umrah/details",
                element: <HajjUmrahDetails></HajjUmrahDetails>
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

            // videos related routes 
            {
                path: "/videos",
                element: <VideosSection></VideosSection>
            },
            {
                path: "/video-details",
                element: <VideoDetails></VideoDetails>
            },

            // tour package related routes 
            {
                path: "/tour-packages",
                element: <TourPackages></TourPackages>
            },
            {
                path: "/tour-packages-details",
                element: <TourPackageDetails></TourPackageDetails>
            },
            {
                path: "/customized-tour",
                element: <CustomizedTour></CustomizedTour>
            },
            // student package related routes 
            {
                path: "/student-package",
                element: <StudentPackage></StudentPackage>
            },
            {
                path: "/student-package-details",
                element: <StudentPackageDetails></StudentPackageDetails>
            }

        ]
    },


]);



export default BasicRoutes;