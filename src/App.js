import React, { useContext } from 'react';
import { Header } from './components/Header/Header.jsx'
import { ContentArea } from './components/ContextArea/ContentArea.jsx'
import { Shop } from './components/Shop/Shop.jsx';
import data from './products.json'
import './styles/App.css';
import './styles/commons.css'

import {AuthContext} from './context'

function App() {

  const getFromLS = (key) => {
    try{
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        console.log(e);
    }
}

  return (
    <div className="App">
      <Header/>
      <ContentArea/>
      <Shop data = {data}/>
    </div>  //'App'
  );
}

export default App;
