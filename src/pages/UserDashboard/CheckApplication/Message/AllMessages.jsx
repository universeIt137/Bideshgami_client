import React, { useEffect, useRef } from 'react';
import SingleMessage from './SingleMessage';

const AllMessages = () => {
    const messages = [
        { image: 'https://i.ibb.co.com/CsPB17H/profile.png', message: 'Hello', isMe: true },
        { image: 'https://i.ibb.co.com/Y39KLDp/client1.jpg', message: 'Hi, How are you?', isMe: false },
        { image: 'https://i.ibb.co.com/CsPB17H/profile.png', message: 'I\'m good, thanks! What are you up to?', isMe: true },
        { image: 'https://i.ibb.co.com/Y39KLDp/client1.jpg', message: 'Just reading about World War II.', isMe: false },
        { image: 'https://i.ibb.co.com/CsPB17H/profile.png', message: 'Oh, interesting! Did you come across the atom bomb?', isMe: true },
        { image: 'https://i.ibb.co.com/Y39KLDp/client1.jpg', message: 'Yes, I did. It was used in 1945, right?', isMe: false },
        { image: 'https://i.ibb.co.com/CsPB17H/profile.png', message: 'Exactly. The U.S. dropped two atomic bombs on Japan.', isMe: true },
        { image: 'https://i.ibb.co.com/Y39KLDp/client1.jpg', message: 'One on Hiroshima and another on Nagasaki.', isMe: false },
        { image: 'https://i.ibb.co.com/CsPB17H/profile.png', message: 'Yes, on August 6th and 9th. The devastation was unimaginable.', isMe: true },
        { image: 'https://i.ibb.co.com/Y39KLDp/client1.jpg', message: 'The bomb in Hiroshima was called "Little Boy," right?', isMe: false },
        { image: 'https://i.ibb.co.com/CsPB17H/profile.png', message: 'That\'s correct. It was the first atomic bomb ever used in warfare.', isMe: true },
        { image: 'https://i.ibb.co.com/Y39KLDp/client1.jpg', message: 'And the Nagasaki bomb was "Fat Man."', isMe: false },
        { image: 'https://i.ibb.co.com/CsPB17H/profile.png', message: 'Yes, and the damage caused by both bombs was catastrophic.', isMe: true },
        { image: 'https://i.ibb.co.com/Y39KLDp/client1.jpg', message: 'How many people were killed in the bombings?', isMe: false },
        { image: 'https://i.ibb.co.com/CsPB17H/profile.png', message: 'It\'s estimated that over 200,000 people died, many from radiation later on.', isMe: true },
        { image: 'https://i.ibb.co.com/Y39KLDp/client1.jpg', message: 'That’s terrifying. The effects lasted for generations.', isMe: false },
        { image: 'https://i.ibb.co.com/CsPB17H/profile.png', message: 'Yes, radiation exposure caused long-term health issues like cancer.', isMe: true },
        { image: 'https://i.ibb.co.com/Y39KLDp/client1.jpg', message: 'It’s hard to imagine the level of destruction from a single bomb.', isMe: false },
        { image: 'https://i.ibb.co.com/CsPB17H/profile.png', message: 'True. Entire cities were flattened in seconds.', isMe: true },
        { image: 'https://i.ibb.co.com/Y39KLDp/client1.jpg', message: 'It also marked the beginning of the nuclear age, right?', isMe: false },
        { image: 'https://i.ibb.co.com/CsPB17H/profile.png', message: 'Yes, after World War II, the Cold War began, and nations raced to build more powerful nuclear weapons.', isMe: true },
        { image: 'https://i.ibb.co.com/Y39KLDp/client1.jpg', message: 'The arms race between the U.S. and the Soviet Union escalated quickly.', isMe: false },
        { image: 'https://i.ibb.co.com/CsPB17H/profile.png', message: 'Exactly. It led to the development of even more destructive weapons, like hydrogen bombs.', isMe: true },
        { image: 'https://i.ibb.co.com/Y39KLDp/client1.jpg', message: 'It’s a reminder of the dangers of nuclear warfare.', isMe: false },
        { image: 'https://i.ibb.co.com/CsPB17H/profile.png', message: 'Definitely. That’s why there are so many efforts for nuclear disarmament today.', isMe: true },
        { image: 'https://i.ibb.co.com/Y39KLDp/client1.jpg', message: 'Yes, we need to avoid such catastrophic events from ever happening again.', isMe: false },
        { image: 'https://i.ibb.co.com/CsPB17H/profile.png', message: 'Agreed. The world has seen enough destruction.', isMe: true },
        { image: 'https://i.ibb.co.com/Y39KLDp/client1.jpg', message: 'Let’s hope the future stays peaceful.', isMe: false },
        { image: 'https://i.ibb.co.com/CsPB17H/profile.png', message: 'Absolutely. No more atom bombs.', isMe: true },
        { image: 'https://i.ibb.co.com/Y39KLDp/client1.jpg', message: 'Amen to that.', isMe: false }
    ];

    const messageRef = useRef(null); // This reference is declared but not used
    const scrollToBottom = () => {
        messageRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, []); // Trigger scrolling whenever messages change

    return (
        <div className="flex-1">
            <div className="w-full h-[calc(100vh-120px)] overflow-y-auto p-5 space-y-3">
                {
                    messages.map((item, idx) => <SingleMessage key={idx} data={item} />)
                }
                <div ref={messageRef} /> {/* Reference for scrolling */}
            </div>
        </div>
    );
};

export default AllMessages;
