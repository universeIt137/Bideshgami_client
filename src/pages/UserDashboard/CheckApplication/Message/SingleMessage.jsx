const SingleMessage = ({ data = {} }) => {
    const { image, message, isMe = false } = data
    return (
        <div className={`flex gap-2 ${isMe && 'flex-row-reverse'}`}>
            <img className="size-[38px] min-w-[38px] object-cover bg-gray-100 rounded-full" src={image} alt="" />
            <p className="bg-gray-100 max-w-[80%] mt-4 rounded-md p-2 text-sm">
                {message}
            </p>
        </div>
    );
};

export default SingleMessage;