import React, { useState, useEffect } from "react";

export const PriceBar = ({ selectedPrice, onPriceChange }) => {
    const [currentRangePrice, setCurrentRangePrice] = useState(selectedPrice);

    useEffect(() => {
        setCurrentRangePrice(selectedPrice);
    }, [selectedPrice]);

    const handleMinPriceChange = (event) => {
        const minPrice = event.target.value === "" ? 0 : Number(event.target.value);
        setCurrentRangePrice((prevRange) => ({
            ...prevRange,
            min: minPrice,
        }));
    };

    const handleMaxPriceChange = (event) => {
        const maxPrice = event.target.value === "" ? 0 : Number(event.target.value);
        setCurrentRangePrice((prevRange) => ({
            ...prevRange,
            max: maxPrice,
        }));
    };

    useEffect(() => {
        onPriceChange(currentRangePrice);
    }, [currentRangePrice, onPriceChange]);

    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Price</div>
            <div className="sidebar-content">
                <div className="price-bar">
                    <input
                        placeholder="0"
                        className="price"
                        id="js-input-min"
                        onChange={handleMinPriceChange}
                    />
                    <input
                        placeholder="200"
                        className="price"
                        id="js-input-max"
                        onChange={handleMaxPriceChange}
                    />
                </div>
            </div>
        </div>
    );
};