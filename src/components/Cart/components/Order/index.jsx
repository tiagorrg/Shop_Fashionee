import React from "react";

export const Order = () => {
    return (
        <div className="order">
            <div className="title">
                Your Order
            </div>
            <div className="order-price-wrapper">
                <div className="price-row">
                    <div className="name">Оrder price</div>
                    <div className="price">$146.98</div>
                </div>
                <div className="price-row">
                    <div className="name">Discount for promo code</div>
                    <div className="price"></div>
                    <div className="no-price">No</div>
                </div>
                <div className="price-row delimiter">
                    <div className="name">
                        Delivery <span className="additional">(Aug 02 at 16:00)</span>
                    </div>
                    <div className="price">$16</div>
                </div>
                <div className="price-row total">
                    <div className="name">Total</div>
                    <div className="price">$162.98</div>
                </div>
            </div>
            <div className="button-wrapper">
                <button className="button">Checkout</button>
                <div className="vertical-line"></div>
            </div>
        </div>
    )
}