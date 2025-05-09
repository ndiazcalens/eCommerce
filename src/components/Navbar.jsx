import React from "react";
import "../stylesheets/navbar.css"
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { ProductsTypeIdContext } from '../context/productTypeContext.jsx'
import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";

function Navbar(){

    const { setSelectedProductTypeId } = useContext(ProductsTypeIdContext);

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
                            <button onClick={()=>setSelectedProductTypeId(null)} className="nav-btn">Productos</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/login">
                            <button className="nav-btn">Iniciar sesión</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/cart">
                            <button className="nav-btn"><FaCartShopping /></button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar;