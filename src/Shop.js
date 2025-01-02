import React, { useState } from "react";
import { Product } from "./components/Product";
import { Sidebar } from "./components/Sidebar"
import PaginationArrowRight from "./icons/arrow-right.svg"
import PaginationArrowLeft from "./icons/arrow-left.svg"
import "./Shop.css"


const getDataProduct = (products) => {
    console.log('Массив продуктов', products)
    return products.map((product) => {
            return <Product product = {product} key={product.id}/>
        }
    )
}

const getFilterDataProduct = (products, search, categories, price, colors) => {
    const filteredArrayProducts = []

    
}

export const Shop = ({data}) => {
    const arrayProducts = data.products
    
    const {currentArrayProducts, setCurrentArrayProducts} = useState ([])
    



    return (
        <div className="container">
            <div className="shop">
                <Sidebar/>
                {/* <div className="sidebar">
                    <div className="search">
                        <label>
                            <input type="text" placeholder="Search" className="search-input" id="search-row" onChange={ debounce (e => setSearchValue(e.target.value), 500)}/>
                            <img src={search} alt="Search" className="search-icon"/>
                        </label>
                    </div>
                    <div className="sidebar-item">
                        <div className="sidebar-title">
                            Categories
                        </div>
                        <div className="sidebar-content">
                            <ul className="custom-list">
                                <li className="js-category active" data-category="All">All</li>
                                <li className="js-category" data-category="Men">Men</li>
                                <li className="js-category" data-category="Women">Women</li>
                                <li className="js-category" data-category="Accessories">Accessories</li>
                                <li className="js-category" data-category="New Arrivals">New Arrivals</li>
                            </ul>
                        </div>
                    </div>
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
                            <button className="button" id="apple-filter" disabled={buttonStatus} onClick={
                                console.log()
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
                </div> */}
                <div className="products-wrapper">
                    <div className="sort-and-count">
                        <div className="product-count">
                            There are <span className="bold" id="products-count">67</span> products in this category
                        </div>
                        <div className="sort">
                            <select name="" id="sort" className="input" >
                                <option value="">Relevance</option>
                                <option value="ASC">ASC</option>
                                <option value="DESC">DESC</option>
                            </select>
                        </div>
                    </div>
                    <div className="products js-products"> 
                        {
                            getDataProduct(arrayProducts)
                        }
                    </div>
                    <div className="pagination" id="pagination">
                        <div className="button-left" id="left-arrow-button">
                            <img src={PaginationArrowLeft} alt="arrow left"/>
                        </div>
                        <div className="pages js-pages">
                            <div className="page active js-page">1<div></div></div>
                            <div className="page js-page">2<div></div></div>
                            <div className="page js-page">3<div></div></div>
                        </div>
                        <div className="button-right" id="right-arrow-button">
                            <img src={PaginationArrowRight} alt="arrow right"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>  //container
    );
}