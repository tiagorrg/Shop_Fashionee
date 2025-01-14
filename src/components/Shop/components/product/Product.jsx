import React, { useContext, useState } from "react";
import {BasketContext, FavoriteContext} from "../../../../context/index"

import Heart from "./icons/heart.svg"
import RedHeart from "./icons/heart-red.svg"
import { PRODUCT_IN_FAVORITE_KEY, PRODUCT_IN_BASKET_KEY, getFromLS, setToLS } from "../../../../constants"

const clickBuyProduct = (currentProduct, key) => {
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

const clickOnFavorite = (currentProduct, keyFavorite) => {
    const productsInFavorite = getFromLS(keyFavorite)

    if (!productsInFavorite || productsInFavorite.length === 0){
        setToLS(keyFavorite, [{...currentProduct}])
        return true
    }

    let hasProductInFavorite = false
    
    const updateProductsInFavorite = productsInFavorite.filter(item => {
        if(item.id === currentProduct.id ){
            hasProductInFavorite = true
        }
        return item.id !== currentProduct.id
    })

    if (productsInFavorite.filter(item => { return item.id === currentProduct.id }).length === 0){
        productsInFavorite.push({...currentProduct})
    }

    if (hasProductInFavorite){
        setToLS(keyFavorite, updateProductsInFavorite)
        return false
    }

    setToLS(keyFavorite, productsInFavorite)
    return true
}

const checkHasFavorite = (productsInFavorite, currentProduct) => {
    if (!productsInFavorite || productsInFavorite.length === 0){
        
        return false
    }

    const hasProductInFavorite = productsInFavorite.filter( product => { 
        return product.id === currentProduct.id
    }).length !== 0

    return hasProductInFavorite
}

export const Product = ({product}) => {
    const {setProductsInBasket} = useContext(BasketContext)
    
    const {setProductsInFavorite} = useContext(FavoriteContext)
    
    const [urlIconFavorite, setUrlIconFavorite] = useState(checkHasFavorite(getFromLS(PRODUCT_IN_FAVORITE_KEY), product) ? RedHeart : Heart)

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
                        setProductsInFavorite(getFromLS(PRODUCT_IN_FAVORITE_KEY))
                }}>
                    <img src={urlIconFavorite} alt="Favorite Icon" className="favorite-icon"/>
                </div>
            </div>
            <img src={product.image ? product.image : 'Loading'} className="product-image" alt={product.name}/>
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