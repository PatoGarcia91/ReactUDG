import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Carrito from './components/navbar/Carrito.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetail from './components/itemDetail/ItemDetail.jsx'
import Checkout from './components/checkout/Checkout.jsx'
import CarritoContextProvider from "./components/context/CarritoContext";



function App() {

  return (
    <BrowserRouter>
      <CarritoContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:nombre" element={<ItemListContainer />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/detalle/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CarritoContextProvider>
    </BrowserRouter>
  )
}

export default App
