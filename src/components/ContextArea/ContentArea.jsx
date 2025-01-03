import React from "react";
import SquarePoints from './background/square-points-10x12.svg'
import './ContentArea.css'

export const ContentArea = () => {

    return (
        <div className="hat">
        <div className="container">
            <div className="background">
                <div className="points"><img src={SquarePoints} alt=""/></div>
                <div className="big-line"></div>
            </div>
            <div className="info-container">
                <div className="title">Shop</div>
                <div className="way">
                    <div className="line"></div>
                    <div className="item">Home</div>
                    <div className="item active">Shop</div>
                </div>  
            </div>
        </div>
        <div className="grey-block"></div>
    </div>
    );
}