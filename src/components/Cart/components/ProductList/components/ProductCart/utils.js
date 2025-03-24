import { getFromLS, setToLS} from "../../../../../../constants"

export const clickDownQuantityProduct = (currentProduct, key) => {
    const productInBasket = getFromLS(key)

    const updatedProducts = productInBasket.map((productInBasket) => {
        if(productInBasket.id === currentProduct.id){
            const newQuantity = productInBasket.quantity - 1

            if (newQuantity === 0){
                return null
            }

            return {
                ...productInBasket,
                quantity: newQuantity
            }
        }
        return productInBasket
    })

    setToLS (key, updatedProducts.filter(product => product !== null))
}

export const clickDellProductFromBasket = (currentProduct, key) => {
    const productInBasket = getFromLS(key)

    const updatedProducts = productInBasket.map((productInBasket) => {
        if(productInBasket.id === currentProduct.id){
            return null
        }
        return productInBasket
    })

    setToLS (key, updatedProducts.filter(product => product !== null))
}