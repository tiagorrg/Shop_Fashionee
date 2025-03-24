export const countOrderPrice = (productsInBasket) => {
    let result = 0

    if (productsInBasket.length !== 0 && productsInBasket){
        productsInBasket.forEach((product) => {
            result += product.quantity * product.price
        })
    }

    return result
}