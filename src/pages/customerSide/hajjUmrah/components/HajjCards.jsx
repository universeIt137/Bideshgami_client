import React from "react"
import { Helmet } from 'react-helmet-async';
import { FaAngleDoubleRight } from 'react-icons/fa';
import PriceCard from "../../../../components/frontendComponents/PriceCard";
import Container from "../../../../shared/Container";
import HajjSingleCard from "./HajjSingleCard";

const HajjCards = () => {
    const viewAll = <p className='flex justify-center text-xl items-center gap-1 font-medium'>View All <FaAngleDoubleRight className="text-primary" /></p>

    const cardsData = [
        {
            title: "Hajj Pre Registration 2025",
            price: "Starts from BDT. 635000 /per person",
            posted: "10 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734165076/Bideshgami/Public/zhl9rzecbabhh3yushbr.png",
        },
        {
            title: "40 Days Shifting Hajj Package 2024",
            price: "Starts from BDT. 635000 /per person",
            posted: "15 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734165076/Bideshgami/Public/pheduhbgbljwpxujtik0.png",
        },
        {
            title: "40 Days Non-Shifting Hajj Package",
            price: "Starts from BDT. 700000 /per person",
            posted: "12 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734165076/Bideshgami/Public/xx1p0onkchjnzeyc6mu4.png",
        },

        {
            title: "Hajj Pre Registration 2025",
            price: "Starts from BDT. 635000 /per person",
            posted: "10 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734165076/Bideshgami/Public/zhl9rzecbabhh3yushbr.png",
        },
        {
            title: "40 Days Shifting Hajj Package 2024",
            price: "Starts from BDT. 635000 /per person",
            posted: "15 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734165076/Bideshgami/Public/pheduhbgbljwpxujtik0.png",
        },
        {
            title: "40 Days Non-Shifting Hajj Package",
            price: "Starts from BDT. 700000 /per person",
            posted: "12 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734165076/Bideshgami/Public/xx1p0onkchjnzeyc6mu4.png",
        },


        {
            title: "Hajj Pre Registration 2025",
            price: "Starts from BDT. 635000 /per person",
            posted: "10 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734165076/Bideshgami/Public/zhl9rzecbabhh3yushbr.png",
        },
        {
            title: "40 Days Shifting Hajj Package 2024",
            price: "Starts from BDT. 635000 /per person",
            posted: "15 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734165076/Bideshgami/Public/pheduhbgbljwpxujtik0.png",
        },
        {
            title: "40 Days Non-Shifting Hajj Package",
            price: "Starts from BDT. 700000 /per person",
            posted: "12 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734165076/Bideshgami/Public/xx1p0onkchjnzeyc6mu4.png",
        },

        {
            title: "Hajj Pre Registration 2025",
            price: "Starts from BDT. 635000 /per person",
            posted: "10 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734165076/Bideshgami/Public/zhl9rzecbabhh3yushbr.png",
        },
        {
            title: "40 Days Shifting Hajj Package 2024",
            price: "Starts from BDT. 635000 /per person",
            posted: "15 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734165076/Bideshgami/Public/pheduhbgbljwpxujtik0.png",
        },
        {
            title: "40 Days Non-Shifting Hajj Package",
            price: "Starts from BDT. 700000 /per person",
            posted: "12 Days Ago",
            image: "https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734165076/Bideshgami/Public/xx1p0onkchjnzeyc6mu4.png",
        },


    ];


    return (
        <Container>
            <div className="pt-12 px-5">
                <div>
                    <div className='container mx-auto'>
                        {/* // other work */}

                        <div className="grid lg:grid-cols-3 gap-8">
                            {
                                cardsData?.map((item, idx) => <HajjSingleCard key={idx} data={item}></HajjSingleCard>)
                            }


                        </div>

                    </div>


                </div>
            </div>
        </Container>
    )
};

export default HajjCards
