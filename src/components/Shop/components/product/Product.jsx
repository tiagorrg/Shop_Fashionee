import React, { useContext, useState } from "react";
import {BasketContext, FavoriteContext} from "../../../../context/index"

import Heart from "./icons/heart.svg"
import RedHeart from "./icons/heart-red.svg"

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

const clickBuyProduct = (currentProduct, key) => {
    console.log(currentProduct)

    const productInBasket = getFromLS(key)

    if(!productInBasket){
        setToLS(key, [{ ...currentProduct, quantity: 1}])
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
        setToLS (key, updatedProducts)
        return true
    }

    productInBasket.push({ ...currentProduct, quantity: 1})

    setToLS(key, productInBasket)
}

const clickOnFavorite = (currentProduct, key) => {
    console.log(getFromLS(key))
    const productsInFavorite = getFromLS(key)

    if (!productsInFavorite){
        setToLS(key, [{...currentProduct}])

        return true
    }

    let hasProductInFavorite = false

    const updatedProducts = productsInFavorite.map((productInFavorite) => {
        if (productInFavorite.id === currentProduct.id) {
            
        }
    })

    if(hasProductInFavorite){
        setToLS (key, updatedProducts)
        return false
    }

    productsInFavorite.push({ ...currentProduct})

    setToLS(key, productsInFavorite)

    return true
}

export const Product = ({product}) => {
    const {PRODUCT_IN_BASKET_KEY, setProductsInBasket} = useContext(BasketContext)
    
    const {PRODUCT_IN_FAVORITE_KEY, setProductInFavorite} = useContext(FavoriteContext)
    
    const [urlIconFavorite, setUrlIconFavorite] = useState(Heart)

    return (
    <div className="product" id={product.id} key={product.id}>
        <div className="photo">
            <div className="top-bar">
                <div className="labels">
                    {product.isSale ? <div className="label sale">sale</div> : ""}
                    {product.isNew ? <div className="label new">new</div> : ""}
                </div>
                <div className="favorites" onClick={() => {
                        clickOnFavorite(product, PRODUCT_IN_FAVORITE_KEY) ? 
                            setUrlIconFavorite(RedHeart) :
                            setUrlIconFavorite(Heart)

                        setProductInFavorite(getFromLS(PRODUCT_IN_FAVORITE_KEY))
                }}>
                    <img src={urlIconFavorite} alt="Favorite Icon" className="favorite-icon"/>
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
        <button className="buy-btn" onClick={() => {
            clickBuyProduct(product, PRODUCT_IN_BASKET_KEY)
            setProductsInBasket(getFromLS(PRODUCT_IN_BASKET_KEY))
        }}>Купить</button>
    </div>
    );
}