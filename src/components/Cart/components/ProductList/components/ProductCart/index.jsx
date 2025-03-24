import React, { useState, useEffect } from "react";
import { PRODUCT_IN_BASKET_KEY, clickBuyProduct, getFromLS} from "../../../../../../constants"
import { clickDownQuantityProduct, clickDellProductFromBasket } from "./utils"

export const ProductCart = ({product, setProductsInBasket}) => {
    const { image, name, oldPrice, price, quantity } = product

    const [ totalPrice, setTotalPrice ] = useState(null)

    useEffect(() => {
        setTotalPrice(Math.floor(quantity * price * 100) / 100)
    }, [quantity, price])

    return (
        <div className="product">
            <div >
                <img className="photo" src={image} alt={name} />
            </div>
            <div className="product-info">
                <div className="title">{name}</div>
                <div className="price-wrapper">
                    <div className="price-and-quantity">
                        <div className="price">
                            <div className="old-price">{oldPrice}</div>
                            <div className="current-price">{price}</div>
                        </div>
                        <div className="quantity">
                            <div className="count-button" onClick={() => {
                                clickDownQuantityProduct(product, PRODUCT_IN_BASKET_KEY)
                                setProductsInBasket(getFromLS(PRODUCT_IN_BASKET_KEY))
                            }}>
                                -
                            </div>

                            <div className="count">
                                {quantity}
                            </div>

                            <div className="count-button" onClick={() => {
                                clickBuyProduct(product, PRODUCT_IN_BASKET_KEY)
                                setProductsInBasket(getFromLS(PRODUCT_IN_BASKET_KEY))
                            }}>
                            +
                            </div>
                        </div>
                    </div>
                    <div className="total-price">{totalPrice}</div>
                </div>
                <div className="close" onClick={() => {
                    clickDellProductFromBasket(product, PRODUCT_IN_BASKET_KEY)
                    setProductsInBasket(getFromLS(PRODUCT_IN_BASKET_KEY))
                }}>X</div>
            </div>
        </div>
    )
}