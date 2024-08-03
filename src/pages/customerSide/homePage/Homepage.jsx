import React from 'react';
import { Helmet } from 'react-helmet-async';
import Home from '../../../component/Home';

const Homepage = () => {
    return (
        <div>
            {/* <Helmet>
                <title>Bideshgami</title>
            </Helmet>
            This is homepage. */}
            <Home/>
        </div>
    );
};

export default Homepage;