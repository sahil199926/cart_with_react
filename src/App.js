
import React from 'react'
import './App.css';
import Cart from './cart/cart';
import  'bootstrap/dist/css/bootstrap.min.css'
import {Provider} from 'react-redux';
import Store from './Store/Store'
function App() {

  
  return (
    <Provider store={Store}>
    <div className="container">
      <Cart/>
      
    </div>
    </Provider>
  )
}

export default App

