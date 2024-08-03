import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const MainLayout = () => {
    return (
        <div className= '' >
            {/* <Outlet></Outlet> */}
            <Navbar/>
        </div>
    );
};

export default MainLayout;