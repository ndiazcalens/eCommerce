import React from "react";
import "../stylesheets/navbar.css"
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Navbar(){
    
    return(

        <nav className="navbar">
            <div className="logo-container">
                <Link to="/">
                    <Logo />
                </Link>
            </div>
                <Link to="/">
                    <p className="main-tittle">materos</p>
                </Link>
            <div className="navlist-container">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">
                            <button className="nav-btn">Inicio</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to ="/products">
                            <button className="nav-btn">Productos</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/cart">
                            <button className="nav-btn">Carrito</button>
                        </Link>
                    </li>
                        
                    <li className="nav-item">
                        <Link to = "/login">
                            <button className="nav-btn">Iniciar sesión</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar;