import React from 'react';

const Client = () => {
    return (
        <>
            <p className='text-3xl lg:text-[40px] text-center font-bold text-[#0066ff] border-b-2 border-black w-max mx-auto pb-2 px-2 mb-10'>OUR STAFF</p>

            <section>
                <div className="bg-[#80b3ff] p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5">
                        <div className=" text-white text-center">
                            <div className="avatar">
                                <div className="rounded-full ring w-32 lg:w-60">
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