import React, { useState } from 'react';

const InputWithHint = ({ name, type, placeholder, hintText, value, onChange }) => {
    const [showHint, setShowHint] = useState(false);

    return (
        <label className="input input-bordered flex items-center gap-2 relative">
            <input
                type={type}
                name={name}
                className="grow pr-[150px] text-[11px] lg:text-[14px]"
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
    );
};

export default InputWithHint;
