import './Navbar.css'

function Navbar() {
    
    return(
        <>
            <header>
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        {/* Logo */}
                        <img src="/logo.jpg" alt="Logo UncleDuck" className="d-inline-block align-text-top logo-img"/>
                        <h1>UncleDuck Games</h1>
                    </div>
                </nav>
            </header>
        </>
    )


}

export default Navbar