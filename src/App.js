import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import ProductsContextProvider from './Global/ProductsContext';
import CartContextProvider from './Global/CartContext';
import Products from './components/Products';
import Cart from './components/Cart';
function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
       <CartContextProvider>  
         <Router>
         <Navbar />
          <Routes> 
             <Route path="/" element ={<Products/>} />
             <Route path="/cart" element={<Cart/>}/>
            </Routes> 
         </Router>
     
         </CartContextProvider >
         </ProductsContextProvider>
    </div>
  );
}

export default App;
