import React, { useContext, useState } from "react";

import { HeaderContext } from "../../../../context/index"

import Heart from "./icons/heart.svg"
import RedHeart from "./icons/heart-red.svg"

import { PRODUCT_IN_FAVORITE_KEY, PRODUCT_IN_BASKET_KEY, getFromLS, clickBuyProduct, clickOnFavorite, checkHasFavorite} from "../../../../constants"

export const Product = ({product}) => {
    const {setProductsInBasket, setProductsInFavorite} = useContext(HeaderContext)
    
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