import React from "react";
import Heart from "../icons/heart.svg"

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
            <button className="buy-btn" onClick={
                console.log('click-buy')
            }>Купить</button>
        </div>
    </>
    );
}