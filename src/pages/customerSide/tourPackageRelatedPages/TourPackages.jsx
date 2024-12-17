import React, { useState } from 'react';
import WorkPermitBanner from '../WorkPermit/components/WorkPermitBanner';
import WorkPermitCards from '../WorkPermit/components/WorkPermitCards';
import Pagination from '../../../shared/Pagination';
import TourBanner from './components/TourBanner';
import TourPackageCards from './components/TourPackageCards';



const TourPackages = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5; // Adjust this value according to your data

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <>
            <div className="mb-10">
                <TourBanner></TourBanner>
            </div>
            <div className="flex w-11/12 mx-auto">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1 bg-primary text-white">All Tour Package</div>
                        <ul tabIndex={0} className="dropdown-content menu text-white rounded-box z-[1] w-40 bg-primary p-2 shadow">
                            <li><a>Bangladesh</a></li>
                            <li><a>International</a></li>
                            <li><a>Domestic</a></li>
                            <li><a>Ladies Package</a></li>
                        </ul>
                    </div>
                </div>

                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn m-1 bg-primary text-white">All Price</div>
                        <ul tabIndex={0} className="dropdown-content menu text-white rounded-box z-[1] w-40 bg-primary p-2 shadow">
                            <li><a>Low Price</a></li>
                            <li><a>Medium Price</a></li>
                            <li><a>High Price</a></li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div>
                <TourPackageCards></TourPackageCards>
            </div>
            <div className="flex justify-end my-5 w-10/12 mx-auto">
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </>
    );
};

export default TourPackages;
