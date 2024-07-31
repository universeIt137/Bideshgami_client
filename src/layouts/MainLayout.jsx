import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/frontendComponents/Footer';

const MainLayout = () => {
    return (
        <>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;