import React, { useContext } from 'react';
import { AppContext } from '../../context';
import { CountFromLS } from './components/CountFromLS'
import './Header.css';

import logoIcon from '../../icons/logo.svg';
import searchIcon from './icons/search.svg';
import profileIcon from './icons/profile.svg';
import heartIcon from './icons/heart.svg';
import cartIcon from './icons/cart.svg';
import vectorIcon from './icons/vector.svg';
import vectorPinkIcon from './icons/vector-pink.svg';

import { countInBasket } from './utils';

export const Header = ({ currentPage, setCurrentPage}) => {
    const {productsInBasket, productsInFavorite} = useContext(AppContext)

    const setShopPage = () => {
        setCurrentPage("Shop")
    }

    return (
        <header className='header'>
            <div className='left-side'>
                <div className='logo-container'>
                    <div className='burger-menu'>
                        <input type='checkbox' id='burger-checkbox' className='burger-checkbox'/>
                        <label className='burger' htmlFor='burger-checkbox'>
                        </label>
                    </div>
                    <div className='logo' onClick={currentPage !== "Shop" ? setShopPage : () => {return}}>
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
                    <div className='menu-item active' onClick={currentPage !== "Shop" ? setShopPage : () => {return}}>
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
                <CountFromLS 
                    urlIcon={heartIcon}
                    altIcon='Icon favorite'
                    count={productsInFavorite.length}
                />

                <CountFromLS
                    isBasket = {true}
                    urlIcon={cartIcon} 
                    altIcon='Icon cart' 
                    count={countInBasket(productsInBasket)}
                    setCurrentPage = {setCurrentPage}
                />
            </div>
        </header>
    );    
}
