import "./navbar.css"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="../../../public/assets/logo.png" alt="Logo de la tienda" />
            </div>
            <div className="navbar-title">Nombre de la Tienda</div>
        </nav>
    );
};

export default NavBar;