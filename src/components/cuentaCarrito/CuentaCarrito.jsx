import './CuentaCarrito.css'
import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext.jsx";

const CuentaCarrito = ({ juego }) => {
  const { agregarCarrito } = useContext(CarritoContext);
  const [contador, setContador] = useState(1);

  //agrega un juego al carro
  const agregar = () => {
      setContador(contador + 1);
  };

  //quita un juego del carro
  //agregar validación por si contador es 0, no resta
  const quitar = () => {
    if (contador > 0){
    setContador(contador - 1);
    }
  };

  const llevarAlCarro = () => {
    let juegoAlCarro = { ...juego, quantity: contador };
    agregarCarrito(juegoAlCarro);
  };


  return (
    <div >
      <h2>{contador}</h2>
      <button className="botonesCarro" onClick={quitar}>quitar</button>
      <button className="botonesCarro" onClick={agregar}>agregar</button>
      <button className="botonesCarro" onClick={llevarAlCarro}>Agregar juego al carrito</button>
    </div>
  );
};

export default CuentaCarrito;