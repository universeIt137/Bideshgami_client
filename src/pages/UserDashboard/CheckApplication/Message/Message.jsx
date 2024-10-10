import { useEffect, useRef } from "react";
import MessageBox from "./MessageBox";
import MessagingFriends from "./MessagingFriends";


const Message = () => {
   
    return (
        <div  className="h-screen flex w-full rounded-lg mainBoxShadow overflow-hidden">
           <MessagingFriends/> 
           <MessageBox/>
        </div>
    );
};

export default Message;