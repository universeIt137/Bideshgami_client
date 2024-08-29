import React from 'react';
import banner from '../../../assets/detailsPage/banner.jpeg'

const Banner = () => {
    const text = `We respect your privacy and recognize the need to protect the personally identifiable information (any information by which you can be identified, such as name, address, and telephone number) you share with us. We would like to assure you that we follow appropriate standards when it comes to protecting your privacy on our app and website
Some of our web pages use 'cookies' so that we can better serve you with customized information when you return to our site. Cookies are identifiers which websites send to the browser on your computer to facilitate your next visit to our site. You can set your browser to notify you when you are sent a cookie, giving you the option to decide whether or not to accept it. The information we collect and analyze is used to improve our service to you.
ShareTrip collects the following personal sensitive information while transacting through ShareTrip, this includes Name and Sex, Phone Number, Billing Address, and Date of birth in case of a child.
ShareTrip does not sell or trade upon any of the above foregoing information without the consent of the user or customer. The foregoing information collected from the users/customers/travellers is put to the following use:
Customer name, address, phone number, traveller's name and age are shared with applicable service providers like the airlines, hotels, etc.for the purpose of reservation and booking the services for the customer/traveller.
Information like Phone number, email address and billing address may be used for promotional purposes, unless the customer/user has unsubscribed from such services. If you choose not to share this information, you can still visit the ShareTrip website, but you may be unable to access certain options, offers and services.
ShareTrip takes appropriate steps to protect the information you share with us. We have implemented technology and security features and strict policy guidelines to safeguard the privacy of your personally identifiable information from unauthorized access and improper use or disclosure. Please contact us on ask@tb-bd.com to obtain names and addresses of the specific entities that shall have access to your personal information in a given transaction.
ShareTrip will continue to enhance its security procedures as new technology becomes available, and ensures that its security procedures are compliant with current applicable regulations.
If our privacy policy changes in the future, it will be posted here and a new effective date will be shown. You should access our privacy policy regularly to ensure you understand our current policies `;

    return (
        <div>
            {/* banner  */}
            
            <div className="w-full h-[140px] relative">
                <img className="w-full h-full object-cover" src={banner} alt="" />
                <div className="absolute w-full h-full bg-white/40 flex justify-center items-center top-0">
                    <p className="text-5xl font-bold text-black">Privacy Policy</p>
                </div>
            </div>


            <div className='bg-[#f7f7f7]'>
                <section className="container mx-auto pt-12 ">
                    <p className='py-6 px-10'>
                        {text}
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Banner;