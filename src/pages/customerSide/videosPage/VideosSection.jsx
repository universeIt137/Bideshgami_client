import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const videos = [
    {
        id: 1,
        title: 'Malaysia Work Permit',
        description:
            'Distribution of the workforce across economic sectors in Canada 2022. The statistic shows the distribution of the workforce across economic sectors in Canada from 2012 to 2022.',
        price: '15,000 BDT',
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424772/Bideshgami/Public/cry6dieyhxeej0djenao.png', // Replace with your image URL
    },
    {
        id: 2,
        title: 'Malaysia Work Permit',
        description:
            'Distribution of the workforce across economic sectors in Canada 2022. The statistic shows the distribution of the workforce across economic sectors in Canada from 2012 to 2022.',
        price: '15,000 BDT',
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424772/Bideshgami/Public/cry6dieyhxeej0djenao.png',
    },
    {
        id: 3,
        title: 'Malaysia Work Permit',
        description:
            'Distribution of the workforce across economic sectors in Canada 2022. The statistic shows the distribution of the workforce across economic sectors in Canada from 2012 to 2022.',
        price: '15,000 BDT',
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424772/Bideshgami/Public/cry6dieyhxeej0djenao.png',
    },
    {
        id: 4,
        title: 'Malaysia Work Permit',
        description:
            'Distribution of the workforce across economic sectors in Canada 2022. The statistic shows the distribution of the workforce across economic sectors in Canada from 2012 to 2022.',
        price: '15,000 BDT',
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424772/Bideshgami/Public/cry6dieyhxeej0djenao.png',
    },
    {
        id: 5,
        title: 'Malaysia Work Permit',
        description:
            'Distribution of the workforce across economic sectors in Canada 2022. The statistic shows the distribution of the workforce across economic sectors in Canada from 2012 to 2022.',
        price: '15,000 BDT',
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424772/Bideshgami/Public/cry6dieyhxeej0djenao.png',
    },
    {
        id: 6,
        title: 'Malaysia Work Permit',
        description:
            'Distribution of the workforce across economic sectors in Canada 2022. The statistic shows the distribution of the workforce across economic sectors in Canada from 2012 to 2022.',
        price: '15,000 BDT',
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424772/Bideshgami/Public/cry6dieyhxeej0djenao.png',
    },
    {
        id: 7,
        title: 'Malaysia Work Permit',
        description:
            'Distribution of the workforce across economic sectors in Canada 2022. The statistic shows the distribution of the workforce across economic sectors in Canada from 2012 to 2022.',
        price: '15,000 BDT',
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424772/Bideshgami/Public/cry6dieyhxeej0djenao.png',
    },
    {
        id: 8,
        title: 'Malaysia Work Permit',
        description:
            'Distribution of the workforce across economic sectors in Canada 2022. The statistic shows the distribution of the workforce across economic sectors in Canada from 2012 to 2022.',
        price: '15,000 BDT',
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424772/Bideshgami/Public/cry6dieyhxeej0djenao.png',
    },

    {
        id: 1,
        title: 'Malaysia Work Permit',
        description:
            'Distribution of the workforce across economic sectors in Canada 2022. The statistic shows the distribution of the workforce across economic sectors in Canada from 2012 to 2022.',
        price: '15,000 BDT',
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424772/Bideshgami/Public/cry6dieyhxeej0djenao.png', // Replace with your image URL
    },
    {
        id: 2,
        title: 'Malaysia Work Permit',
        description:
            'Distribution of the workforce across economic sectors in Canada 2022. The statistic shows the distribution of the workforce across economic sectors in Canada from 2012 to 2022.',
        price: '15,000 BDT',
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424772/Bideshgami/Public/cry6dieyhxeej0djenao.png',
    },
    {
        id: 3,
        title: 'Malaysia Work Permit',
        description:
            'Distribution of the workforce across economic sectors in Canada 2022. The statistic shows the distribution of the workforce across economic sectors in Canada from 2012 to 2022.',
        price: '15,000 BDT',
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424772/Bideshgami/Public/cry6dieyhxeej0djenao.png',
    },
    {
        id: 4,
        title: 'Malaysia Work Permit',
        description:
            'Distribution of the workforce across economic sectors in Canada 2022. The statistic shows the distribution of the workforce across economic sectors in Canada from 2012 to 2022.',
        price: '15,000 BDT',
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424772/Bideshgami/Public/cry6dieyhxeej0djenao.png',
    },
    {
        id: 5,
        title: 'Malaysia Work Permit',
        description:
            'Distribution of the workforce across economic sectors in Canada 2022. The statistic shows the distribution of the workforce across economic sectors in Canada from 2012 to 2022.',
        price: '15,000 BDT',
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424772/Bideshgami/Public/cry6dieyhxeej0djenao.png',
    },
    {
        id: 6,
        title: 'Malaysia Work Permit',
        description:
            'Distribution of the workforce across economic sectors in Canada 2022. The statistic shows the distribution of the workforce across economic sectors in Canada from 2012 to 2022.',
        price: '15,000 BDT',
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424772/Bideshgami/Public/cry6dieyhxeej0djenao.png',
    },
    {
        id: 7,
        title: 'Malaysia Work Permit',
        description:
            'Distribution of the workforce across economic sectors in Canada 2022. The statistic shows the distribution of the workforce across economic sectors in Canada from 2012 to 2022.',
        price: '15,000 BDT',
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424772/Bideshgami/Public/cry6dieyhxeej0djenao.png',
    },
    {
        id: 8,
        title: 'Malaysia Work Permit',
        description:
            'Distribution of the workforce across economic sectors in Canada 2022. The statistic shows the distribution of the workforce across economic sectors in Canada from 2012 to 2022.',
        price: '15,000 BDT',
        image: 'https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424772/Bideshgami/Public/cry6dieyhxeej0djenao.png',
    },
];



const VideosSection = () => {
    const [cards, setCards] = useState(videos.slice(0, 8));
    const handleCard=() => {
        setCards(videos);
    }
    return (
        <div className=" py-10">
            <div className="w-10/12 mx-auto px-4">
                {/* <h2 className="text-3xl font-bold text-center mb-6">Our Videos</h2> */}
                <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
                    {cards.map((video) => (
                        <Link to={'/video-details'} key={video.id}>
                            <div
                                key={video.id}
                                className="bg-white shadow-lg rounded-lg overflow-hidden"
                            >
                                {/* Thumbnail */}
                                <div className="relative">
                                    <img
                                        src={video.image}
                                        alt={video.title}
                                        className="w-full lg:h-72 object-cover"
                                    />
                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0">
                                        <button className=" text-white p-3 rounded-full">
                                            <img src="https://res.cloudinary.com/dg2ngi7kh/image/upload/v1734424762/Bideshgami/Public/r7mpjyouem6cl6lkjw1f.png" alt="" />
                                        </button>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-4">
                                    <h3 className="lg:text-3xl text-primary font-semibold mb-2">{video.title}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{video.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="lg:text-3xl font-bold">{video.price}</span>
                                        <button className="bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    ))}
                </div>
                <div className="text-center mt-8">
                    <button onClick={() => handleCard()} className="bg-primary text-white px-6 py-2 rounded-md hover:bg-blue-600">
                        See More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideosSection;
