import './Navbar.css'
import Carrito from './Carrito.jsx'


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
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Categoría 1</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Categoría 2</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Categoría 3</a>
                                </li>
                            </ul>
                        </div>
                        <Carrito />
                    </div>
                    
                </nav>
            </header>
        </>
    )


}

export default Navbar