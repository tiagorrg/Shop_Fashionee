import React, { useState } from 'react';
import { Header } from './components/Header/Header.jsx'
import { ContentArea } from './components/ContextArea/ContentArea.jsx'
import { Shop } from './components/Shop/Shop.jsx';
import { Footer } from './components/Footer/Footer.jsx'
import data from './products.json'
import './styles/App.css';
import './styles/commons.css'

import { HeaderContext, CurrentPages } from './context'
import { PRODUCT_IN_FAVORITE_KEY, PRODUCT_IN_BASKET_KEY, getFromLS } from './constants'

function App() {
  const [productsInBasket, setProductsInBasket] = useState (getFromLS(PRODUCT_IN_BASKET_KEY) || [])
  const [productsInFavorite, setProductsInFavorite] = useState (getFromLS(PRODUCT_IN_FAVORITE_KEY) || [])

  const [currentPage, setCurrentPage] = useState ("Shop")

  
  
  return (
    <HeaderContext.Provider value = {{
      productsInBasket,
      setProductsInBasket,

      productsInFavorite,
      setProductsInFavorite
    }}>

      <div className="App">
        <CurrentPages.Provider value={{
          currentPage,
          setCurrentPage
        }}>

          <Header
            currentPage = {currentPage}
            setCurrentPage = {setCurrentPage}
          />
          <ContentArea 
            currentPage = {currentPage}
          />

        </CurrentPages.Provider>

        <Shop data = {data}/>

        <Footer/>
      </div>
    </HeaderContext.Provider>
  );
}

export default App;
