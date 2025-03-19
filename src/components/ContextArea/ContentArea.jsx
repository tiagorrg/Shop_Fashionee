import React from "react";
import SquarePoints from './background/square-points-10x12.svg'
import './ContentArea.css'

export const ContentArea = ({currentPage}) => {

    return (
        <div className="hat">
        <div className="container">
            <div className="background">
                <div className="points"><img src={SquarePoints} alt=""/></div>
                <div className="big-line"></div>
            </div>
            <div className="info-container">
                <div className="title">{currentPage}</div>
                <div className="way">
                    <div className="line"></div>
                    <div className="item">Home</div>
                    <div className={currentPage === "Shop" ? "item active" : "item"}>Shop</div>
                    {currentPage === "Cart" ? <div className="item active">Cart</div> : ""}
                </div>
            </div>
        </div>
        <div className="grey-block"></div>
    </div>
    );
}