import React, { useState } from "react";
import Heart from "./icons/heart.svg"

const PRODUCT_IN_BASKET_KEY = 'product-in-basket'

const setToLS = (key, value) => {
    try{
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log(e);
    }
}

const getFromLS = (key) => {
    try{
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        console.log(e);
    }
}

const clickBuyProduct = (currentProduct) => {
    console.log(currentProduct)

    const productInBasket = getFromLS(PRODUCT_IN_BASKET_KEY)

    if(!productInBasket){
        setToLS(PRODUCT_IN_BASKET_KEY, [{ ...currentProduct, quantity: 1}])
        //updateHeaderInfoBasket()
        return true
    }

    let hasProductInBasket = false;

    const updatedProducts = productInBasket.map((productInBasket) => {
        if(productInBasket.id === currentProduct.id){
            hasProductInBasket = true

            return {
                ...productInBasket,
                quantity: productInBasket.quantity + 1
            }
        }
        return productInBasket
    })

    if(hasProductInBasket){
        setToLS (PRODUCT_IN_BASKET_KEY, updatedProducts)
        //updateHeaderInfoBasket()
        return true
    }

    productInBasket.push({ ...currentProduct, quantity: 1})

    setToLS(PRODUCT_IN_BASKET_KEY, productInBasket)
}

export const Product = ({product}) => {
    

    return (
    <>
        <div className="product" id={product.id} key={product.id}>
            <div className="photo">
                <div className="top-bar">
                    <div className="labels">
                        {product.isSale ? <div className="label sale">sale</div> : ""}
                        {product.isNew ? <div className="label new">new</div> : ""}
                    </div>
                    <div className="favorites">
                        <img src={Heart} alt="Favorite Icon" className="favorite-icon"/>
                    </div>
                </div>
                <img src={product.image ? product.image : 'Loading'} className="product-image"/>
            </div>
            <div className="info">
                <div className="name">{product.name}</div>
                <div className="price">
                    <div className="current-price">{product.price}</div>
                    <div className="old-price">{
                        product.oldPrice !== null ? product.oldPrice : ''
                    }
                    </div>
                </div>
            </div>
            <button className="buy-btn" onClick={() => clickBuyProduct(product)}>Купить</button>
        </div>
    </>
    );
}