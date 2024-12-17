import React from "react"
import { Helmet } from 'react-helmet-async';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Container from "../../../../shared/Container";
import WorkPermitSingleCard from "../../WorkPermit/components/WorkPermitSingleCard";
import TourSingleCard from "./TourSingleCard";

const TourPackageCards = () => {
    const viewAll = <p className='flex justify-center text-xl items-center gap-1 font-medium'>View All <FaAngleDoubleRight className="text-primary" /></p>

    const cardsData = [
        {
            category: "Work Permit",
            title: "Malaysia Work Permit",
            price: "15,000 BDT",
            posted: "10 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734431790/Bideshgami/Public/tltpvlkfuheyt1mgli6y.png",
        },
        {
            category: "Work Permit",
            title: "Singapore Work Permit",
            price: "20,000 BDT",
            posted: "15 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734431891/Bideshgami/Public/zcurkfz7shvztsbrmncs.png",
        },
        {
            category: "Work Permit",
            title: "Dubai Work Permit",
            price: "18,500 BDT",
            posted: "12 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734431923/Bideshgami/Public/gzpvuwie1ww8cyoi3cja.png",
        },
        {
            category: "Work Permit",
            title: "Qatar Work Permit",
            price: "22,000 BDT",
            posted: "8 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734431951/Bideshgami/Public/j0zr7bsaysjey9bhsf6g.png",
        },
        {
            category: "Student",
            title: "Malaysia Student Visa",
            price: "12,000 BDT",
            posted: "6 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734431790/Bideshgami/Public/tltpvlkfuheyt1mgli6y.png",
        },
        {
            category: "Student",
            title: "Canada Student Visa",
            price: "25,000 BDT",
            posted: "5 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734431891/Bideshgami/Public/zcurkfz7shvztsbrmncs.png",
        },
        {
            category: "Student",
            title: "Australia Student Visa",
            price: "30,000 BDT",
            posted: "2 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734431923/Bideshgami/Public/gzpvuwie1ww8cyoi3cja.png",
        },
        {
            category: "Student",
            title: "UK Student Visa",
            price: "28,000 BDT",
            posted: "3 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734431951/Bideshgami/Public/j0zr7bsaysjey9bhsf6g.png",
        },
        {
            category: "Hajj & Umrah",
            title: "Basic Hajj Package",
            price: "150,000 BDT",
            posted: "7 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734431951/Bideshgami/Public/j0zr7bsaysjey9bhsf6g.png",
        },
        {
            category: "Hajj & Umrah",
            title: "Medium Hajj Package",
            price: "45,000 BDT",
            posted: "20 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734431923/Bideshgami/Public/gzpvuwie1ww8cyoi3cja.png",
        },
        {
            category: "Hajj & Umrah",
            title: "Premium Hajj Package",
            price: "75,000 BDT",
            posted: "20 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734431891/Bideshgami/Public/zcurkfz7shvztsbrmncs.png",
        },
        {
            category: "Hajj & Umrah",
            title: "Ultra Premium Hajj Package",
            price: "115,000 BDT",
            posted: "20 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734431790/Bideshgami/Public/tltpvlkfuheyt1mgli6y.png",
        },
        {
            category: "Tour Package",
            title: "basic Hajj Package",
            price: "15,000 BDT",
            posted: "20 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734431891/Bideshgami/Public/zcurkfz7shvztsbrmncs.png",
        },
        {
            category: "Tour Package",
            title: "Normal Tour Package",
            price: "45,000 BDT",
            posted: "20 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734431923/Bideshgami/Public/gzpvuwie1ww8cyoi3cja.png",
        },
        {
            category: "Tour Package",
            title: "Premium Tour Package",
            price: "55,000 BDT",
            posted: "20 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734431951/Bideshgami/Public/j0zr7bsaysjey9bhsf6g.png",
        },
        {
            category: "Tour Package",
            title: "Ultra Premium Tour Package",
            price: "75,000 BDT",
            posted: "20 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734431790/Bideshgami/Public/tltpvlkfuheyt1mgli6y.png",
        },
    ];




    return (
        <Container>
            <div className="pt-12 px-5">
                <div className="">
                    <div className='container mx-auto'>
                        {/* // other work */}

                        <div className="flex flex-wrap justify-around gap-4">
                            {
                                cardsData?.map((item, idx) => <TourSingleCard key={idx} data={item}></TourSingleCard>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
};

export default TourPackageCards
