import { MdOutlineSearch } from "react-icons/md";
import FriendBar from "./FriendBar";

const MessagingFriends = () => {
    const friends = [
        {
            name: 'junayet',
            image: 'https://i.ibb.co.com/CsPB17H/profile.png',
            notification: 'sending you message',
            time: '11:40'
        },
        {
            name: 'junayet',
            image: 'https://i.ibb.co.com/CsPB17H/profile.png',
            notification: 'sending you message',
            time: '11:40'
        },
        {
            name: 'junayet',
            image: 'https://i.ibb.co.com/CsPB17H/profile.png',
            notification: 'sending you message',
            time: '11:40'
        },
    ]
    return (
        <div className="min-w-[280px] max-w-[280px] h-full border-r-2 border-gray-400">
            <h2 className="text-lg h-[38px] flex justify-center items-center text-center text-black border-b-2 border-gray-400">Message</h2>
            <div className="py-5 space-y-5">
                <div className="flex w-max mx-auto rounded-xl overflow-hidden relative">
                    <input type="text" placeholder="Share Manager" className="w-[200px] h-8 bg-gray-200 px-3 text-[13px] text-center outline-none " />
                    <MdOutlineSearch className="text-gray-600 text-xl absolute right-1 top-1" />
                </div>
                <div className="px-5 space-y-3">
                    {
                        friends.map((item, idx)=> <FriendBar key={idx} data={item} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default MessagingFriends;