import React, { useState } from "react";
import { Search } from "./components/Search"
import { Categories } from "./components/Categories"
import SeasonSaleBanner from "../images/season-sale-banner.svg"


export const Sidebar = () => {
    const [buttonStatus, setButtonStatus] = useState (true)

    return (
        <div className="sidebar">
            <Search/>
            <Categories/>
            <div className="sidebar-item">
                <div className="sidebar-title">
                    Price
                </div>
                <div className="sidebar-content">
                    <div className="price-bar">
                        <input type="text" placeholder="0" className="price" id="js-input-min"/>
                        <input type="text" placeholder="200" className="price" id="js-input-max"/>
                    </div>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="sidebar-title">
                    Colors
                </div>
                <div className="sidebar-content">
                    <div className="colors">
                        <div className="color">
                            <input type="checkbox" className="color-checkbox filter-color" id="black" name="black" value="Black"/>
                            <label htmlFor="black" className="color-name">Black</label>
                        </div>
                        <div className="color">
                            <input type="checkbox" className="color-checkbox filter-color" id="blue" name="blue" value="Blue"/>
                            <label htmlFor="blue" className="color-name">Blue</label>
                        </div>
                        <div className="color">
                            <input type="checkbox" className="color-checkbox filter-color" id="red" name="red" value="Red"/>
                            <label htmlFor="red" className="color-name">Red</label>
                        </div>
                        <div className="color">
                            <input type="checkbox" className="color-checkbox filter-color" id="yellow" name="yellow" value="Yellow"/>
                            <label htmlFor="yellow" className="color-name">Yellow</label>
                        </div>
                        <div className="color">
                            <input type="checkbox" className="color-checkbox filter-color" id="green" name="green" value="Green"/>
                            <label htmlFor="green" className="color-name">Green</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar-item">
                <div className="button-wrapper">
                    <button className="button" id="apply-filter" disabled={buttonStatus} onClick={
                        console.log('click apply-filter')
                    }>Apply Filter</button>
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
                    <img src={SeasonSaleBanner} alt="Banner"/>
                </a>
            </div>
        </div>
    );
}