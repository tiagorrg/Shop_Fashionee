import React from 'react';
import { Header } from './Header'
import { ContentArea } from './ContentArea'
import { Shop } from './Shop';
import data from './products.json'
import './App.css';
import './commons.css'

function App() {

  const getFromLS = (key) => {
    try{
        return JSON.parse(localStorage.getItem(key));
    } catch (e) {
        console.log(e);
    }
}

const setToLS = (key, value) => {
    try{
        localStorage.setItem(key, JSON.stringify(value));
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
