import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../../context";

import { countOrderPrice } from "./utils"
import { deliveryPrice, discount } from "../../../../constants";

export const Order = () => {
    const [ orderPrice, setOrderPrice ] = useState(0)
    const [ discountTotal, setDiscountTotal ] = useState(0)
    const { productsInBasket, promoIsActive } = useContext(AppContext)

    useEffect(() => {
        setOrderPrice(Math.floor(countOrderPrice(productsInBasket) * 100) / 100)
    }, [productsInBasket])

    useEffect(() => {
        if (promoIsActive){
            setDiscountTotal(Math.floor(orderPrice * discount * 100) / 100)
        } else {
            setDiscountTotal(0)
        }
        
    }, [promoIsActive, orderPrice])

    return (
        <div className="order">
            <div className="title">
                Your Order
            </div>
            <div className="order-price-wrapper">
                <div className="price-row">
                    <div className="name">Оrder price</div>
                    <div className="price">{orderPrice}</div>
                </div>
                <div className="price-row">
                    <div className="name">Discount for promo code</div>
                    <div className="price">{promoIsActive ? `${discountTotal}` : ''}</div>
                    <div className="no-price" style={{
                        display: promoIsActive ? "none" : "block"
                    }}>
                        {promoIsActive ? '' : 'No'}
                    </div>
                </div>
                <div className="price-row delimiter">
                    <div className="name">
                        Delivery <span className="additional">(Aug 02 at 16:00)</span>
                    </div>
                    <div className="price">{deliveryPrice}</div>
                </div>
                <div className="price-row total">
                    <div className="name">Total</div>
                    <div className="price">{
                        Math.floor((orderPrice + deliveryPrice - discountTotal) * 100) / 100
                    }</div>
                </div>
            </div>
            <div className="button-wrapper">
                <button className="button">Checkout</button>
                <div className="vertical-line"></div>
            </div>
        </div>
    )
}