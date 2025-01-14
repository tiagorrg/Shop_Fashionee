
export const PRODUCT_IN_FAVORITE_KEY = 'products-in-favorite'

export const PRODUCT_IN_BASKET_KEY = 'product-in-basket'

export const getFromLS = (key) => {
    try{
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        console.log(e);
    }
}

export const setToLS = (key, value) => {
    try{
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log(e);
    }
}
