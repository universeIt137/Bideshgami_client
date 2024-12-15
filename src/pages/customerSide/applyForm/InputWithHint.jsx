import React, { useState } from 'react';

const InputWithHint = ({ name, type, placeholder, hintText, value, onChange }) => {
    const [showHint, setShowHint] = useState(false);

    return (
        <>
            <label className="input input-bordered flex items-center gap-2 relative  border-gray-600  border-2 h-[36px] rounded-md">
                
                <input
                    type={type}
                    name={name}
                    className="grow  text-[11px] lg:text-[14px] "
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {showHint && (
                    <span className="absolute right-14 text-blue-600 text-[11px] lg:text-[14px]">
                        {hintText}
                    </span>
                )}
                <button
                    className=''
                    onMouseEnter={() => setShowHint(true)}
                    onMouseLeave={() => setShowHint(false)}
                >
                    <img
                        className="hover:text-blue-600"
                        src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1724909755/Bideshgami%20images/Icons/dh9mzqkit1tgfajktpu4.png"
                        alt=""

                    />
                </button>
            </label>
        </>
    );
};

export default InputWithHint;
