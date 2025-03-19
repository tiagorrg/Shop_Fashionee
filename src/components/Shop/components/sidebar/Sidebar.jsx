import React, { useState, useEffect, useCallback } from "react";

import { Search } from "./components/search/Search";
import { Categories } from "./components/categories/Categories";
import { PriceBar } from "./components/price_bar/PriceBar";
import { Colors } from "./components/filter_colors/Colors"

import SeasonSaleBanner from "./images/season-sale-banner.svg";

export const Sidebar = ({ setSearchValue, currentFilter, setCurrentFilter }) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [tempFilter, setTempFilter] = useState(currentFilter);

    useEffect(() => {
        const isFilterChanged = JSON.stringify(tempFilter) !== JSON.stringify(currentFilter);
        setIsButtonDisabled(!isFilterChanged);
    }, [tempFilter, currentFilter]);

    const applyFilter = () => {
        setCurrentFilter(tempFilter);
    };

    const handleCategoryChange = (category) => {
        setTempFilter((prevFilter) => ({
            ...prevFilter,
            category: category,
        }))
    }

    const handlePriceChange = useCallback(
    (priceRange)  => 
        setTempFilter((prevFilter) => ({
            ...prevFilter,
            price: priceRange, 
        }))
        , []
    )

    const handleColorsChange = (colors) => {
        setTempFilter((prevFilter) => ({
            ...prevFilter,
            colors: colors, 
        }))
    }

    return (
        <div className="sidebar">
            <Search 
                setSearchValue={setSearchValue}
            />

            <Categories
                selectedCategory={tempFilter.category}
                onCategoryChange={handleCategoryChange}
            />

            <PriceBar
                selectedPrice={tempFilter.price}
                onPriceChange={handlePriceChange}
            />

            <Colors
                selectedColors={tempFilter.colors}
                onColorsChange={handleColorsChange}
            />

            <div className="sidebar-item">
                <div className="button-wrapper">
                    <button
                        className="button"
                        id="apply-filter"
                        disabled={isButtonDisabled}
                        onClick={applyFilter}
                    >
                        Apply Filter
                    </button>
                    <div className="vertical-line"></div>
                </div>
            </div>

            <div className="sidebar-item">
                <div className="sidebar-title">
                    Reviewed by you
                </div>
                <div className="sidebar-content">
                    <div className="reviewed-products">
                        <div className="product">
                            <div className="image"></div>
                            <div className="info">
                                <div className="name">Retro style handbag</div>
                                <div className="price">
                                    <div className="current-price">$35.99</div>
                                    <div className="old-price">$52.99</div>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="image"></div>
                            <div className="info">
                                <div className="name">Warm casual sweater</div>
                                <div className="price">
                                    <div className="current-price">$35.99</div>
                                    <div className="old-price">$52.99</div>
                                </div>
                            </div>
                        </div>
                        <div className="product">
                            <div className="image"></div>
                            <div className="info">
                                <div className="name">Textured turtleneck with zip</div>
                                <div className="price">
                                    <div className="current-price">$35.99</div>
                                    <div className="old-price">$52.99</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <a href="http://localhost:3000">
                    <img src={SeasonSaleBanner} alt="Banner" />
                </a>
            </div>
        </div>
    );
};