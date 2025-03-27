export const countInBasket = (products) => {
    let result = 0

    if (!products || products.length === 0){
        return result
    }

    if (!products[0].quantity){
        return result = products.length
    }

    if (products[0].quantity){
        products.forEach(object => {
            result += object.quantity
        });
    }

    return result
}