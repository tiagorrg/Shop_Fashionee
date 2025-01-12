import React, { useState } from 'react';
import { Header } from './components/Header/Header.jsx'
import { ContentArea } from './components/ContextArea/ContentArea.jsx'
import { Shop } from './components/Shop/Shop.jsx';
import data from './products.json'
import './styles/App.css';
import './styles/commons.css'

import {BasketContext, FavoriteContext} from './context'

const getFromLS = (key) => {
  try{
      return JSON.parse(localStorage.getItem(key));
  } catch (e) {
      console.log(e); //Люблю Леночку
  }
}

function App() {
  const PRODUCT_IN_BASKET_KEY = 'product-in-basket'
  const [productsInBasket, setProductsInBasket] = useState (getFromLS(PRODUCT_IN_BASKET_KEY))

  const PRODUCT_IN_FAVORITE_KEY = 'products-in-favorite'
  const [productInFavorite, setProductInFavorite] = useState (getFromLS(PRODUCT_IN_FAVORITE_KEY))

  return (
    <BasketContext.Provider value={{
      PRODUCT_IN_BASKET_KEY,
      productsInBasket,
      setProductsInBasket
    }}>
      <FavoriteContext.Provider value = {{
        PRODUCT_IN_FAVORITE_KEY,
        productInFavorite,
        setProductInFavorite
      }}>

        <div className="App">
          <Header/>
          <ContentArea/>
          <Shop data = {data}/>
        </div> 

      </FavoriteContext.Provider>
    </BasketContext.Provider>
  );
}

export default App;
