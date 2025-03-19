import React, { useState } from 'react';
import { Header } from './components/Header/Header.jsx'
import { ContentArea } from './components/ContextArea/ContentArea.jsx'
import { Shop } from './components/Shop/Shop.jsx';
import { Footer } from './components/Footer/Footer.jsx'
import data from './products.json'
import './styles/App.css';
import './styles/commons.css'

import { AppContext } from './context'
import { PRODUCT_IN_FAVORITE_KEY, PRODUCT_IN_BASKET_KEY, getFromLS } from './constants'

function App() {
  const [productsInBasket, setProductsInBasket] = useState (getFromLS(PRODUCT_IN_BASKET_KEY) || [])
  const [productsInFavorite, setProductsInFavorite] = useState (getFromLS(PRODUCT_IN_FAVORITE_KEY) || [])

  const [currentPage, setCurrentPage] = useState ("Shop")
  const [filteredProducts, setFilteredProducts] = useState(data.products);

  return (
    <AppContext.Provider value = {{
      productsInBasket,
      setProductsInBasket,

      productsInFavorite,
      setProductsInFavorite,

      currentPage,
      setCurrentPage,

      filteredProducts,
      setFilteredProducts,
    }}>

      <div className="App">
          <Header
            currentPage = {currentPage}
            setCurrentPage = {setCurrentPage}
          />
          <ContentArea 
            currentPage = {currentPage}
          />

        <Shop products = {data.products}/>

        <Footer/>
      </div>
    </AppContext.Provider>
  );
}

export default App;
