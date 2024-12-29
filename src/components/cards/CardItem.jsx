import './CardItem.css'
import { Link } from "react-router-dom";

const CardItem = ({ juego }) => {
  return (
    <div className="tarjeta" key={juego.id}>
        <img src={juego.imagen} className="portada"/>

        <div className="card-body">
            <h5 className="card-title">{juego.nombre}</h5> <hr />
            <p className="card-text categ">{juego.categoria}</p>
        </div>

        <div className="card-footer">
            <small >{juego.precio}</small> <hr />
            {/* En vez de agregar itemDetail, voy directo al contador */}

            <Link to={`/detalle/${juego.id}`} className='claro'>Ver detalle</Link>

        </div>
    </div>

  );
};

export default CardItem;