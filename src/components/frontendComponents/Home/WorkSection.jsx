import React from "react"
import { Helmet } from 'react-helmet-async';
import PriceCard from '../../../components/frontendComponents/PriceCard';
import { FaAngleDoubleRight } from 'react-icons/fa';
import Container from "../../../shared/Container";

const WorkSection = () => {
    const viewAll = <p className='flex justify-center text-xl items-center gap-1 font-medium'>View All <FaAngleDoubleRight className="text-primary" /></p>

    const cardsData = [
        {
            category: "Work Permit",
            title: "Malaysia Work Permit",
            price: "15,000 BDT",
            posted: "10 Days Ago",
            image: "https://i.ibb.co/GxL6PM8/worker1.jpg",
        },
        {
            category: "Work Permit",
            title: "Singapore Work Permit",
            price: "20,000 BDT",
            posted: "15 Days Ago",
            image: "https://i.ibb.co/ZLfgZyJ/worker2.jpg",
        },
        {
            category: "Work Permit",
            title: "Dubai Work Permit",
            price: "18,500 BDT",
            posted: "12 Days Ago",
            image: "https://i.ibb.co/3FydLRp/worker3.jpg",
        },
        {
            category: "Work Permit",
            title: "Qatar Work Permit",
            price: "22,000 BDT",
            posted: "8 Days Ago",
            image: "https://i.ibb.co/kDk2GbY/worker4.jpg",
        },
        {
            category: "Student",
            title: "Malaysia Student Visa",
            price: "12,000 BDT",
            posted: "6 Days Ago",
            image: "https://i.ibb.co/RpRW7fB/student1.jpg",
        },
        {
            category: "Student",
            title: "Canada Student Visa",
            price: "25,000 BDT",
            posted: "5 Days Ago",
            image: "https://i.ibb.co/g95t0M4/student2.jpg",
        },
        {
            category: "Student",
            title: "Australia Student Visa",
            price: "30,000 BDT",
            posted: "2 Days Ago",
            image: "https://i.ibb.co/Y8pSvph/student3.webp",
        },
        {
            category: "Student",
            title: "UK Student Visa",
            price: "28,000 BDT",
            posted: "3 Days Ago",
            image: "https://i.ibb.co/GWrMZ5V/student4.jpg",
        },
        {
            category: "Hajj & Umrah",
            title: "Basic Hajj Package",
            price: "150,000 BDT",
            posted: "7 Days Ago",
            image: "https://i.ibb.co/RBj7N45/hajj1.png",
        },
        {
            category: "Hajj & Umrah",
            title: "Medium Hajj Package",
            price: "45,000 BDT",
            posted: "20 Days Ago",
            image: "https://i.ibb.co/sQPMwvT/hajj2.jpg",
        },
        {
            category: "Hajj & Umrah",
            title: "Premium Hajj Package",
            price: "75,000 BDT",
            posted: "20 Days Ago",
            image: "https://i.ibb.co/Rvx0pbs/hajj3.jpg",
        },
        {
            category: "Hajj & Umrah",
            title: "Ultra Premium Hajj Package",
            price: "115,000 BDT",
            posted: "20 Days Ago",
            image: "https://i.ibb.co/CvKr0HS/hajj4.png",
        },
        {
            category: "Tour Package",
            title: "basic Hajj Package",
            price: "15,000 BDT",
            posted: "20 Days Ago",
            image: "https://i.ibb.co/BBdvdcB/tourist1.jpg",
        },
        {
            category: "Tour Package",
            title: "Normal Tour Package",
            price: "45,000 BDT",
            posted: "20 Days Ago",
            image: "https://i.ibb.co/bBWshvS/tourist2.jpg",
        },
        {
            category: "Tour Package",
            title: "Premium Tour Package",
            price: "55,000 BDT",
            posted: "20 Days Ago",
            image: "https://i.ibb.co/qYCzWnL/tourist3.jpg",
        },
        {
            category: "Tour Package",
            title: "Ultra Premium Tour Package",
            price: "75,000 BDT",
            posted: "20 Days Ago",
            image: "https://i.ibb.co/SxgShjT/tourist4.jpg",
        },
    ];
    
    const workPermit = cardsData?.filter(card => card?.category === 'Work Permit');
    const Student = cardsData?.filter(card => card?.category === 'Student');
    const hajjUmrah = cardsData?.filter(card => card?.category === 'Hajj & Umrah');
    const tourPackage = cardsData?.filter(card => card?.category === 'Tour Package');

    return (
        <Container>
            <div className="pt-12 px-5">
                <div>
                    <div className='container mx-auto'>
                        {/* // other work */}
                        <div className='flex justify-between my-10'>
                            <p className='font-bold text-xl lg:text-3xl'>Work Permit </p>
                            {viewAll}
                        </div>
                        <div className="flex flex-wrap justify-around gap-7">
                            {
                                workPermit?.map((item, idx) => <PriceCard key={idx} data={item}></PriceCard>)
                            }


                        </div>
                        <div className='flex justify-between my-10'>
                            <p className='font-bold text-xl lg:text-3xl'>Student</p>
                            {viewAll}
                        </div>
                        <div className="flex flex-wrap justify-around gap-7">
                            {
                                Student?.map((item, idx) => <PriceCard key={idx} data={item}></PriceCard>)
                            }
                        </div>

                        <div className='flex justify-between my-10'>
                            <p className='font-bold text-xl lg:text-3xl'>Hajj & Umrah</p>
                            {viewAll}
                        </div>
                        <div className="flex flex-wrap justify-around gap-7">
                            {
                                hajjUmrah?.map((item, idx) => <PriceCard key={idx} data={item}></PriceCard>)
                            }
                        </div>


                        <div className='flex justify-between my-10'>
                            <p className='font-bold text-xl lg:text-3xl'>Tour Package</p>
                            {viewAll}
                        </div>
                        <div className="flex flex-wrap justify-around gap-7">
                            {
                                tourPackage?.map((item, idx) => <PriceCard key={idx} data={item}></PriceCard>)
                            }
                        </div>
                    </div>


                </div>
            </div>
        </Container>
    )
};

export default WorkSection
