import React from "react";
import { useProducts } from "../hooks/useProducts";
import LateralNavbar from "../components/LateralNavbar";
import Product from "../components/Product"
import "../stylesheets/products.css"
import { useContext } from "react";
import { ProductsTypeIdContext } from '../context/productTypeContext.jsx'
import Cart from "./Cart.jsx";

const Products = () => {
    const { products, loading, error } = useProducts(); //llamo el hook donde hago el fetch de products
    
    const { selectedProductTypeId, setSelectedProductTypeId } = useContext(ProductsTypeIdContext);
    // si tengo que leer el valor, llamo a selectedProductTypeId, si lo tengo que actualizar setSelectedProductTypeId
  
    if (loading == true) return <div className="loading">Cargando..</div>;
    if (error) return <div>Error: {error}</div>; 

    //condición ? valorSiEsVerdadero : valorSiEsFalso;
    //si selectedProductTypeId es verdadero(no es null o undefined), se ejecuta lo de la izq

    const filteredProducts = selectedProductTypeId
    ?  products.filter((p) => p.product_type_id === selectedProductTypeId)
    : products;


    return(
        <>
            <Cart />
            <div className="products-page" >
                
                <LateralNavbar setSelectedProductTypeId={setSelectedProductTypeId} />
                <div className="all-products">
                    {filteredProducts.map((product)=>(
                        <Product
                        key={product.id}
                        image= {product.image_url}
                        name= {product.name}                            
                        price= {product.price}
                        />
                        ))
                        } 
                </div>
   
            </div>
        </>
    );
};

export default Products;