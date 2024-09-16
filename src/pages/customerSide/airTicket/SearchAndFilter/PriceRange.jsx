/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const PriceRange = ({ price, setPrice, minPrice, maxPrice }) => {
    

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };
    return (
        <div className="flex flex-col p-4">
            <label className="text-lg font-semibold text-gray-800 mb-4">One Way Price</label>
            <input type="range"
                min={minPrice}
                max={maxPrice}
                value={price}
                onChange={handlePriceChange}
                className="range range-info" />
            <div className="mt-2 font-medium text-gray-700 text-base">
                <span>{minPrice.toLocaleString()} tk</span> -
                <span> {price.toLocaleString()} tk</span>
            </div>
        </div>
    );
};

export default PriceRange;