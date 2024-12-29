import './Carrito.css'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext.jsx";

const Carrito = () => {

    const { carrito, resetCarrito, borrarId, getMontoTotal } = useContext(CarritoContext);

    let total = getMontoTotal()

    return(
        <div>
            <div className="container-fluid">
        
                {carrito.map((juego) => {
                return (
                    <div style={{ border: "2px solid black", width: "200px" }} key={juego.id}>
                    <h2>nombre: {juego.nombre}</h2>
                    <h3>precio: {juego.precio}</h3>
                    {/* <h3>cantidad: {juego.stock}</h3> */}
                    <button onClick={() => borrarId(juego.id)}>eliminar</button>
                    </div>
            );
            })}
            </div>

            {total !== 0 && <h2>El total a pagar es {total}</h2>}

            <button onClick={resetCarrito}>Vaciar</button>
            <Link to="/checkout">Finalizar compra</Link>

        </div>
   )

}

export default Carrito