import React, { useContext } from "react";
import { ProductCart } from "./components/ProductCart";

import { AppContext } from "../../../../context";

export const ProductList = () => {
    const { productsInBasket, setProductsInBasket } = useContext(AppContext)

    return (
        <div className="product-list">
            {
                productsInBasket.map((product) => 
                    <ProductCart 
                        key = {product.id}
                        product = {product}
                        setProductsInBasket = {setProductsInBasket}
                    />
                )
            }
        </div>
    )
}