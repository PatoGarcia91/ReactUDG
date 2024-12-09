import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import Carrito from './components/navbar/Carrito.jsx'
import CarritoWidget from './components/carritoWidget/CarritoWidget.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'



function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:nombre" element={<ItemListContainer />} />
        <Route path="/Carrito" element={<Carrito />} />
        {/* <Route path="/detail/:id" element={<ItemDetail />} /> */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
