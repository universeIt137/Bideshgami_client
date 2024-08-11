import { FaWhatsappSquare } from 'react-icons/fa';
import gmailLogo from '../../../assets/detailsPage/gmailLogo.png'
import { FaCopy, FaFacebook } from 'react-icons/fa6';
import { MdFavoriteBorder } from 'react-icons/md';
import { IoShareSocialSharp } from 'react-icons/io5';
import { useState } from 'react';
import toast from 'react-hot-toast';
const Share = () => {
    const [shareModal, setShowShareModal] = useState(false)
    const shareText = "Check out this awesome Visa!";
    const shareUrl = window.location.href;
    const [isCopied, setIsCopied] = useState(false)
    const shareOnFacebook = () => {
        const url = `https://www.facebook.com/dialog/share?app_id=87741124305&href=${encodeURIComponent(`${shareText} ${shareUrl}`)}&display=popup`;
        window.open(url, '_blank');
    };
    const shareOnMail = () => {
        const subject = "Check this out!";
        const body = `${shareText} ${shareUrl}`;
        const mailtoLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };
    const shareOnWhatsApp = () => {
        const url = `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`;
        window.open(url, '_blank');
    };
    const handleCopy = () => {
        navigator.clipboard.writeText(shareUrl)
            .then(() => {
                toast.success('Copied!!')
                setIsCopied(true)
            })
            .catch(err => {
                toast.error(err.message)
            });
    }
    return (
        <div className='relative'>
            <button onClick={() => setShowShareModal(!shareModal)} className='text-base sm:text-xl flex items-center gap-0.5'><IoShareSocialSharp />
                Share</button>
            <div className={`bg-gray-200 text-sm  py-3 px-2 space-y-0.5 rounded-sm absolute transition-all duration-200 origin-top ${shareModal ? 'scale-y-100' : 'scale-y-0'} border border-gray-500 w-max`}>
                <div onClick={shareOnWhatsApp} className='flex gap-2 hover:bg-white px-2 py-1 rounded-sm cursor-pointer'>
                    <p className=' size-[18px] flex justify-center items-center rounded-full overflow-hidden'><FaWhatsappSquare className='text-3xl rounded-full text-green-600' /></p>
                    Whatsapp
                </div>
                <div onClick={shareOnFacebook} className='flex gap-2 hover:bg-white px-2 py-1 rounded-sm cursor-pointer'>
                    <FaFacebook className='text-lg  text-blue-600' />
                    Facebook
                </div>
                <div onClick={shareOnMail} className='flex gap-2 hover:bg-white px-2 py-1 rounded-sm cursor-pointer'>
                    <img src={gmailLogo} className='size-[18px]' alt="" />
                    Mail
                </div>
                <div onClick={handleCopy} className='flex gap-2 hover:bg-white px-2 py-1 rounded-sm cursor-pointer'>
                    <FaCopy className='text-lg  text-blue-600' />
                    {isCopied ? 'Copied' : 'Copy'} link
                </div>

            </div>
        </div>
    );
};

export default Share;