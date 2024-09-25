import { MdOutlineSearch } from "react-icons/md";

const MessageBox = () => {
    return (
        <div className="w-full pb-5 flex flex-col justify-between">
            <div className="w-full h-[38px] bg-gray-200 flex justify-center items-center gap-2">
                <img src='https://i.ibb.co.com/CsPB17H/profile.png' className="size-[26px] min-w-[26px] object-cover bg-white rounded-full " alt="" />
                <p>Junayet</p>
            </div>
            {/* allMessage  */}
           <div className="px-5 flex-1"> <div className=" w-full min-h-full "></div></div>
            <div className="flex gap-5 px-5 py-5">
                <div className="flex w-full mx-auto rounded-xl overflow-hidden relative">
                    <input type="text" placeholder="Type message" className="w-full h-8 bg-gray-200 px-3 pl-10 text-[13px] outline-none " />
                   
                </div>
                <button className="w-11 h-[30px] bg-primary text-white rounded-lg text-[10px] font-medium flex justify-center items-center">Send</button>
            </div>
            
        </div>
    );
};

export default MessageBox;