import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'



function App() {

  return (
    <>
      <Navbar />
      <body>
        <main>
        <ItemListContainer mensaje='Catálogo proximamente disponible!' />
        </main>
      </body>
    </>
  )
}

export default App
