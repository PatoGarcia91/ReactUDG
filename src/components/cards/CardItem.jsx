import './CardItem.css'
import CuentaCarrito from '../cuentaCarrito/CuentaCarrito'; // Adjust the path as needed

const CardItem = ({ juego }) => {
  return (
    <div className="tarjeta" key={juego.id}>
        <img src={juego.imagen} className="portada"/>

        <div className="card-body">
            <h5 className="card-title">{juego.nombre}</h5>
            <p className="card-text categ">{juego.categoria}</p>
        </div>

        <div className="card-footer">
            <small >{juego.precio}</small>
            {/* En vez de agregar itemDetail, voy directo al contador */}
            <CuentaCarrito />

            {/* <Link to={`/detail/${elemento.id}`}>Ver detalle</Link> */}
            {/* <button className= "btnAgregar" id="agregar{elm.id}">Agregar al carrito</button> */}

        </div>
    </div>

  );
};

export default CardItem;