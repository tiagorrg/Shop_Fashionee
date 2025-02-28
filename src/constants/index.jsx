
export const PRODUCT_IN_FAVORITE_KEY = 'products-in-favorite'

export const PRODUCT_IN_BASKET_KEY = 'product-in-basket'

export const pageSize = 6

export const oldFilter = {
    category: 'All',
    price: {
        min: 0,
        max: 300
    },
    colors: []
}

export const currentFilter = {
    category: 'All',
    price: {
        min: 0,
        max: 300
    },
    colors: []
}

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

export const debounce = (func, ms) => {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), ms);
    };
}

export const clickBuyProduct = (currentProduct, key) => {
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

export const clickOnFavorite = (currentProduct, keyFavorite) => {
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

export const checkHasFavorite = (productsInFavorite, currentProduct) => {
    if (!productsInFavorite || productsInFavorite.length === 0){
        
        return false
    }

    const hasProductInFavorite = productsInFavorite.filter( product => { 
        return product.id === currentProduct.id
    }).length !== 0

    return hasProductInFavorite
}

export const filterBySearchValue = (products, value) => {
    return products.filter((product) => {
        const smallName = product.name.toLowerCase()
        return smallName.includes(value.toLowerCase())
    })
}

export const filterProductsByFilterInfo = (products, filter) =>{
    let filteredProducts = products

    if (Object.keys(filter).length){
        if(filter.category && filter.category !== 'All'){
            filteredProducts = filteredProducts.filter((product)=> {
                return product.categories.includes(filter.category)
            })
        }

        if(filter.price !== oldFilter.price){
            const minPriceInput = filter.price.min

            const maxPriceInput = filter.price.max

            if (minPriceInput <= maxPriceInput){
                filteredProducts = filteredProducts.filter((product)=> {
                    return minPriceInput <= product.price && product.price <= maxPriceInput
                })
            }
        }

        if(filter.colors.length !== 0){
            filteredProducts = filteredProducts.filter((product) =>{
                return filter.colors.includes(product.color)
            })
        }
    }

    return filteredProducts
}
