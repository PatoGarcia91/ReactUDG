import './Navbar.css'
import { Link } from 'react-router-dom';
import CarritoWidget from "../carritoWidget/CarritoWidget";
import Carrito from "./Carrito.jsx";



function Navbar() {
    
    return( 
        <>
            <header>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid ">
                        <img src="/logo.jpg" alt="Logo UncleDuck" className="d-inline-block align-text-top logo-img"/>
                        <div className='col-md-3'>    
                            <h1 className='titulo'>UncleDuck Games</h1>
                        </div>
                        <div className='enlaces col-md-4 '>
                            <ul className="navbar-nav navbar-right">
                                {/* <li className="nav-item"> */}
                                    <Link className="nav-link" to="/">Todos</Link>
                                {/* </li>
                                <li className="nav-item"> */}
                                    <Link className="nav-link" to="/categoria/Accion">Acción</Link>
                                {/* </li>
                                <li className="nav-item"> */}
                                    <Link className="nav-link" to="/categoria/Aventuras">Aventuras</Link>
                                {/* </li>
                                <li className="nav-item"> */}
                                    <Link className="nav-link" to="/categoria/Deportes">Deportes</Link>
                                {/* </li>                         */}
                            </ul>
                        </div>
                        <Link to="/CarritoWidget">
                            <CarritoWidget />
                        </Link>
                        <Carrito />
                    </div>
                    
                </nav>
            </header>
        </>
    )


}

export default Navbar