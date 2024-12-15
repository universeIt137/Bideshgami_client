import React, { useState } from 'react';
import WorkPermitBanner from './components/WorkPermitBanner';
import WorkPermitCards from './components/WorkPermitCards';
import Pagination from '../../../shared/Pagination';



const WorkPermit = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5; // Adjust this value according to your data

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <>
            <div className="mb-10">
                <WorkPermitBanner />
            </div>
            <div>
                <WorkPermitCards currentPage={currentPage} />
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

export default WorkPermit;
