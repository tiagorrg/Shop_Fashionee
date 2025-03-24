import React from "react";

import { ProductList } from "./components/ProductList";
import { Order } from "./components/Order";
import { PromoCode } from "./components/PromoCode"

import './style.css'

export const Cart = () => {
    return (
        <div className="container">
            <div className="cart">
                <div className="order-wrapper">
                    <ProductList/>

                    <Order/>
                </div>
                <div className="promo-code-wrapper">
                    <PromoCode/>
                </div>
            </div>
        </div>
    )
}