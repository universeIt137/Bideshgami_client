import React from 'react';
import { BiLogoMastercard } from 'react-icons/bi';
import { FaCcDiscover, FaCcMastercard, FaPaypal } from 'react-icons/fa';
import { RiBankCard2Line, RiMastercardLine, RiVisaFill } from 'react-icons/ri';
import { SiAmericanexpress, SiBitcoin } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="bg-[#0066ff] text-white lg:px-10">
                <div className='flex flex-col lg:flex-row justify-between w-1/2  lg:w-10/12 mx-auto items-center  py-10 text-center lg:text-start'>

                    <div className=' flex flex-col basis-1/4 space-y-2'>
                        <p className='text-2xl'>Discover</p>
                        <p>Home</p>
                        <p>Career</p>
                        <Link to={"/term-condition"}><p>Terms & conditions</p></Link>
                        <Link to={"/refund-policy"}><p>Refund Policy</p></Link>
                        
                    </div>

                    <div className='mt-12 lg:mt-0 flex flex-col basis-1/4 space-y-2 '>
                        <p className='text-2xl mb-5'>Payment Methods</p>
                        {/* <div className='text-4xl space-y-5 '>
                            <div className='flex gap-8'>
                                <p className=''><RiVisaFill /></p>
                                <p className=''><SiAmericanexpress /></p>
                                <p><FaCcMastercard /></p>
                            </div>
                            <div className="flex  gap-8">
                                <p className=''><FaPaypal /></p>
                                <p><RiMastercardLine /></p>
                                <p><RiBankCard2Line /></p>
                            </div>
                            <div className="flex gap-8">
                                <p><BiLogoMastercard /></p>
                                <p><FaCcDiscover /></p>
                                <p><SiBitcoin /></p>
                            </div>
                        </div> */}

                        <div className='ml-8 lg:ml-6'>
                            <img src="https://res.cloudinary.com/deifi77os/image/upload/v1722700494/Bideshgami/scvpwmf9pexosg2ikfvy.png" alt="" />
                        </div>
                    </div>

                    <div className='mt-12 lg:mt-0 flex flex-col basis-1/4 space-y-2'>
                        <p className='text-2xl'>Need Help ?</p>
                        <p>We are Always here for you! <br /> Knock us on Messanger anytime <br /> or Call our Hotline (10AM - 10PM).</p>

                        <p className='text-2xl mt-20'>Contact</p>
                        <p>info@bideshgami.com</p>
                        <p>+8845345343345</p>
                    </div>

                    <div className='mt-12 lg:mt-0 flex flex-col basis-1/4 space-y-2'>
                        <div className='text-center'>
                            <p className='text-2xl'>Download our app</p>
                            <div className='flex justify-center'>
                                <img src="https://res.cloudinary.com/deifi77os/image/upload/v1722700494/Bideshgami/k9c2qx9dpap03abxm8xs.png" alt="" />
                            </div>
                            <p className='text-2xl mt-4'>Follow Us</p>
                            <div className='flex justify-center'>
                                <img src="https://res.cloudinary.com/deifi77os/image/upload/v1722700494/Bideshgami/uec8sawxfqbbgxoptckw.png" alt="" />
                            </div>
                        </div>

                    </div>



                </div>

                <hr />

                <div className=" w-10/12 mx-auto">
                    <div className="container mx-auto py-4 flex flex-wrap flex-col items-center sm:flex-row">
                        
                        <div>
                            <img className='w-36' src="https://res.cloudinary.com/deifi77os/image/upload/v1722700494/Bideshgami/kbcp5nbx2ssawy4hwd1f.png" alt="" />
                        </div>


                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center  items-center sm:justify-start">
                            <p className="text-white text-xl  text-center sm:text-left">© Copyright Bideshgami.
                            </p>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;