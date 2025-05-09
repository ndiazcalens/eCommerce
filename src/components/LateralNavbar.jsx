import React from "react";
import "../stylesheets/lateral-navbar.css"
import { useProductsTypes } from "../hooks/useProductsTypes.js";
import { ProductsTypeIdContext } from '../context/productTypeContext.jsx'
import { useContext } from "react";



const LateralNavbar = () =>{

    const { products_types, loading, error } = useProductsTypes(); //llamo el hook donde hago el fetch de products types

    const { setSelectedProductTypeId } = useContext(ProductsTypeIdContext);

    if (loading == true) return <div className="loading">Cargando..</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <div>
            <div className="lateral-navbar">
                <ul>
                    <li>
                        <button onClick={()=>setSelectedProductTypeId(null)}  className="btn-lat-navbar">Todo</button>
                    </li>
                    {products_types.map((product_type) => (
                        <li key={product_type.id}>
                            <button onClick={()=>setSelectedProductTypeId(product_type.id)}  className="btn-lat-navbar">{product_type.name}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        
    )
}


export default LateralNavbar;


//TODO: apunte para despues pasar a papel de como elevar un estado entre componentes padre e hijo(lift state up)
//Crear un estado en el componente padre con useState, por ejemplo:
//const [selectedProductTypeId, setSelectedProductTypeId] = useState(null);
//Pasás la función setSelectedProductTypeId al componente hijo (LateralNavbar) como prop, así puede modificar ese estado cuando se hace clic
//en un botón.
//El componente padre conserva ese estado actualizado y se lo pasa a otro hijo (Products) para que lo use como filtro (.filter() o .map()
//según necesites).