import './CuentaCarrito.css'
import { useState } from "react";

const CuentaCarrito = () => {
  const [contador, setContador] = useState(0);

  const agregar = () => {
    setContador(contador + 1);
  };
  const quitar = () => {
    setContador(contador - 1);
  };
  const llevar = () => {
    setContador(contador - 1);
  };


  return (
    <div >
      <h2>{contador}</h2>
      <button className="botonesCarro" onClick={quitar}>quitar</button>
      <button className="botonesCarro" onClick={agregar}>agregar</button>
      <button className="botonesCarro" onClick={llevar}>Agregar juego al carrito</button>
    </div>
  );
};

export default CuentaCarrito;