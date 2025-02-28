import React, { useState } from 'react';
import { Header } from './components/Header/Header.jsx'
import { ContentArea } from './components/ContextArea/ContentArea.jsx'
import { Shop } from './components/Shop/Shop.jsx';
import data from './products.json'
import './styles/App.css';
import './styles/commons.css'

import { HeaderContext } from './context'
import { PRODUCT_IN_FAVORITE_KEY, PRODUCT_IN_BASKET_KEY, getFromLS } from './constants'

function App() {
  const [productsInBasket, setProductsInBasket] = useState (getFromLS(PRODUCT_IN_BASKET_KEY) || [])

  const [productsInFavorite, setProductsInFavorite] = useState (getFromLS(PRODUCT_IN_FAVORITE_KEY) || [])

  

  return (
    <HeaderContext.Provider value = {{
      productsInBasket,
      setProductsInBasket,

      productsInFavorite,
      setProductsInFavorite
    }}>
        <div className="App">
          <Header/>
          <ContentArea/>
          <Shop data = {data}/>
        </div> 
    </HeaderContext.Provider>
  );
}

export default App;
