import React from "react";

import buttonArrow from './icons/button-arrow.svg'

export const PromoCode = () => {
    return (
        <>
            <div className="info">
                <div className="title">You Have A Promo Code?</div>
                <div className="description">To receive up-to-date promotional codes, subscribe to us on social networks.</div>
            </div>
            <div className="promo-code">
                <input type="text" name="promo-code" className="input" placeholder="Enter promo code"/>
                <div className="button-wrapper">
                    <button className="button"><img src={buttonArrow} alt="Arrow icon"/></button>
                    <div className="vertical-line"></div>
                </div>
            </div>
            <div className="find-us">
                <div className="find-us-text">Find us here:</div>
                <div className="find-us-links">
                    <div className="find-us-link">
                        <a href="https://ya.ru/">FB</a>
                    </div>
                    <div className="line"></div>
                    <div className="find-us-link">
                        <a href="https://ya.ru/">TW</a>
                    </div>
                    <div className="line"></div>
                    <div className="find-us-link">
                        <a href="https://ya.ru/">INS</a>
                    </div>
                    <div className="line"></div>
                    <div className="find-us-link">
                        <a href="https://ya.ru/">PT</a>
                    </div>
                </div>
            </div>
        </>
    )
}