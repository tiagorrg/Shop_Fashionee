import { React } from 'react';
import logoIcon from './icons/logo.svg';
import searchIcon from './icons/search.svg';
import profileIcon from './icons/profile.svg';
import heartIcon from './icons/heart.svg';
import cartIcon from './icons/cart.svg';
import vectorIcon from './icons/vector.svg';
import vectorPinkIcon from './icons/vector-pink.svg';
import './Header.css';

export const Header = () => {

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
                <div className='header-icons'>
                    <img src={heartIcon} alt='icons-favorites'/>
                    <div className='counter js-favorites-count'>0</div>
                </div>
                <div className='header-icons'>
                    <img src={cartIcon} alt='icons-cart'/>
                    <div className='counter js-basket-counter'>0</div>
                </div>
            </div>
        </header>
    );    
}
