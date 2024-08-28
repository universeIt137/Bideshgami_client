import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/frontendComponents/Navbar';
import Footer from '../components/frontendComponents/Footer';

const MainLayout = () => {
    return (
        <>

            <Navbar></Navbar>
            <Outlet>
            </Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;