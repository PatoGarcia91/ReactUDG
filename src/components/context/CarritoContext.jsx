import { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);


  const agregarCarrito = (product) => {
    setCarrito([...carrito, product]);
  };
  const resetCarrito = () => {
    setCarrito([]);
  };

  const borrarId = (id) => {
    let nuevoArray = carrito.filter((juego) => juego.id !== id) //mantengo los que no sean el id elegido
    setCarrito(nuevoArray)
  };

  const getMontoTotal = () => {
    let total = carrito.reduce((acc, juego) => {
      return acc + juego.precio * juego.cantidad;
    }, 0);

    return total;
  };

  const getTotalJuegos = () => {};

  let data = {
    agregarCarrito,
    carrito,
    resetCarrito,
    borrarId,
    getMontoTotal,
    getTotalJuegos
  };
  return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>;
};

export default CarritoContextProvider;