import React, { useState } from "react";
import { Search } from "./components/search/Search";
import { Categories } from "./components/categories/Categories";
import SeasonSaleBanner from "./images/season-sale-banner.svg";

export const Sidebar = ({ searchValue, setSearchValue }) => {
    const [buttonStatus, setButtonStatus] = useState(true);

    return (
        <div className="sidebar">
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <Categories />
            <div className="sidebar-item">
                <div className="button-wrapper">
                    <button
                        className="button"
                        id="apply-filter"
                        disabled={buttonStatus}
                        onClick={() => true}
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
                    <div className="reviewed-products js-reviewed-products">
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
                <a href="#">
                    <img src={SeasonSaleBanner} alt="Banner" />
                </a>
            </div>
        </div>
    );
};
