import React from 'react';

const Client = () => {
    return (
        <>
            <div className='pt-10 lg:pt-32 w-2/4 mx-auto'>
                <p className='text-3xl lg:text-5xl text-center font-bold text-[#0066ff]'>OUR STAFF</p>
                <div className="divider"></div>
            </div>

            <section>
                <div className="bg-[#80b3ff] p-5">
                    <div className="lg:flex justify-around p-10 mx-auto">
                        <div className=" text-white text-center">
                            <div className="avatar">
                                <div className="rounded-full ring w-32 md:w-60">
                                    <img src="https://www.corporatephotographerslondon.com/wp-content/uploads/2023/02/LinkedIn_Profile_Photo.jpg" />
                                </div>
                            </div>
                            <p className='lg:text-2xl font-bold'>MD.SADIQUL ISLAM</p>
                            <p className='text-[16px] font-bold text-center text-black'>CEO</p>
                        </div>
                        <div className=" text-white text-center">
                            <div className="avatar">
                                <div className="ring-offset-base-100  rounded-full ring ring-offset-2 w-32 lg:w-60">
                                    <img src="https://www.for-image.com/wp-content/uploads/2023/01/LinkedIn-studio-headshot-photographer-london-1024x1024.jpg" />
                                </div>
                            </div>
                            <p className='lg:text-2xl font-bold'>MD.MAHAMUDUL HASAN
                                FAHAD</p>
                            <p className='text-[16px] font-bold text-center text-black'>Motion Graphic Designer</p>
                        </div>
                        <div className=" text-white text-center">
                            <div className="avatar">
                                <div className=" ring-offset-base-100  rounded-full ring ring-offset-2 w-32 lg:w-60">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5NTBNBrHAvaW_hEYgujDAUqbLQ1j0R22ANw&s" />
                                </div>
                            </div>
                            <p className='lg:text-2xl font-bold'>MD.SADIQUL ISLAM</p>
                            <p className='text-[16px] font-bold text-center text-black'>Motion Graphic Designer</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Client;