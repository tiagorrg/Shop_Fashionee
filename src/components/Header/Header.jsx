import React, { useState, useEffect, useContext } from 'react';
import { BasketContext, FavoriteContext } from '../../context';
import { CountFromLS } from './components/CountFromLS'
import './Header.css';

import logoIcon from './icons/logo.svg';
import searchIcon from './icons/search.svg';
import profileIcon from './icons/profile.svg';
import heartIcon from './icons/heart.svg';
import cartIcon from './icons/cart.svg';
import vectorIcon from './icons/vector.svg';
import vectorPinkIcon from './icons/vector-pink.svg';

const getFromLS = (key) => {
    try{
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        console.log(e);
    }
}

const countInLSForKey = (key) => {
    const arrayObject = getFromLS(key)
    let result = 0

    if (!arrayObject){
        return result
    }

    if (!arrayObject[0].quantity){
        return result = arrayObject.length
    }

    if (arrayObject[0].quantity){
        arrayObject.forEach(object => {
            result += object.quantity
        });
    }

    return result
}

export const Header = () => {
    const {PRODUCT_IN_BASKET_KEY, productsInBasket} = useContext(BasketContext)
    const {PRODUCT_IN_FAVORITE_KEY, productInFavorite,} = useContext(FavoriteContext)

    const [favoriteCounter, setFavoriteCounter] = useState(countInLSForKey)
    const [basketCounter, setBasketCounter] = useState (countInLSForKey(PRODUCT_IN_BASKET_KEY))

    useEffect(() => {
        setBasketCounter(countInLSForKey(PRODUCT_IN_BASKET_KEY))
    }, [productsInBasket]);
    
    useEffect(() => {
        setFavoriteCounter(countInLSForKey(PRODUCT_IN_FAVORITE_KEY))
    }, [productInFavorite])

    return (
        <header className='header'>
            <div className='left-side'>
                <div className='logo-container'>
                    <div className='burger-menu'>
                        <input type='checkbox' id='burger-checkbox' className='burger-checkbox'/>
                        <label className='burger' htmlFor='burger-checkbox'>
                        </label>
                    </div>
                    <div className='logo'>
                        <img src={logoIcon} alt='logo-fashionee'/>
                    </div>
                </div>
                <div className='menu'>
                    <div className='menu-item'>
                        Home
                    </div>
                    <div className='menu-item'>
                        Pages
                        <img src={vectorIcon} alt='' className='arrow-default'/>
                        <img src={vectorPinkIcon} alt='' className='arrow-hover'/>
                    </div>
                    <div className='menu-item active'>
                        Shop
                        <img src={vectorIcon} alt='' className='arrow-default'/>
                        <img src={vectorPinkIcon} alt='' className='arrow-hover'/>
                    </div>
                    <div className='menu-item'>
                        Blog
                    </div>
                    <div className='menu-item'>
                        Contact
                    </div>
                </div>
            </div>
            <div className='right-side'>
                <div className='header-icons'>
                    <img src={searchIcon} alt='icons-search'/>
                </div>
                <div className='header-icons'>
                    <img src={profileIcon} alt='icons-profile'/>
                </div>
                <CountFromLS urlIcon={heartIcon} altIcon='Icon favorite' count={favoriteCounter} />
                <CountFromLS urlIcon={cartIcon} altIcon='Icon cart' count={basketCounter} />
            </div>
        </header>
    );    
}
