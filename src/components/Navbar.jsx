import React from "react";
import "../stylesheets/navbar.css"
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { ProductsTypeIdContext } from '../context/productTypeContext.jsx'
import { useContext, useState, useRef, useEffect} from "react";

function Navbar(){

    const { setSelectedProductTypeId } = useContext(ProductsTypeIdContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

    return(

    <nav className="navbar" ref={menuRef}>
      <div className="logo-container">
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <Link to="/">
        <p className="main-tittle">ConRitmoDeMate</p>
      </Link>

      {/* Botón del menú hamburguesa */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        ☰
      </button>

      {/* Menú que se despliega */}
      <div className={`navlist-container ${menuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              <button className="nav-btn">Inicio</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              onClick={() => {
                setSelectedProductTypeId(null);
                setMenuOpen(false);
              }}
            >
              <button className="nav-btn">Productos</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
            >
              <button className="nav-btn">Iniciar sesión</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>


    )
}

export default Navbar;