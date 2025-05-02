import React from "react";
import "../stylesheets/lateral-navbar.css"
import { useProductsTypes } from "../hooks/useProductsTypes.js";
import { useState } from "react";

const LateralNavbar = () =>{

    const { products_types, loading, error } = useProductsTypes(); //llamo el hook donde hago el fetch de products
    const [click, setClick] = useState(null);



    if (loading == true) return <div className="loading">Cargando..</div>;
    if (error) return <div>Error: {error}</div>;
    console.log(products_types)
    return (
        <div>
            <div className="lateral-navbar">
                <ul>
                    {products_types.map((product_type) => (
                        <li key={product_type.id}>
                            <button onClick={()=>setClick(product_type.id)}  className="btn-lat-navbar">{product_type.name}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    )
}


export default LateralNavbar;