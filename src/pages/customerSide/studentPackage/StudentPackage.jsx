import React from 'react';
import StudentBanner from './components/StudentBanner';
import HajjCards from '../hajjUmrah/components/HajjCards';
import StudentPackageCards from './components/StudentPackageCards';
import Container from '../../../shared/Container';

const StudentPackage = () => {
    return (
        <div>
            <StudentBanner></StudentBanner>
            <Container>
                <StudentPackageCards></StudentPackageCards>
            </Container>
        </div>
    );
};

export default StudentPackage;