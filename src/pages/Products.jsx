import React from "react";
import { useProducts } from "../hooks/useProducts";
import LateralNavbar from "../components/LateralNavBar";
import Product from "../components/Product"
import "../stylesheets/products.css"
import { useState } from "react";
import { useProductsTypes } from "../hooks/useProductsTypes.js";


const Products = () => {
    const { products, loading, error } = useProducts(); //llamo el hook donde hago el fetch de products
    const { products_types } = useProductsTypes(); //llamo el hook donde hago el fetch de products types
    const [ selectedProductTypeID, setSelectedProductTypeId ] = useState(null);
  
    if (loading == true) return <div className="loading">Cargando..</div>;
    if (error) return <div>Error: {error}</div>; 

    //condición ? valorSiEsVerdadero : valorSiEsFalso;

    //const filteredProducts = products_type 
  //? products.filter((p) => p.products_type.id === products_type.id) 
  //: products;


  // intentar forma de que directamente filtro los productos segun su type id directamente desde las props en vez de hacer un filter

    return(
        <>
            <div className="products-page" >
                <LateralNavbar setSelectedProductTypeId={setSelectedProductTypeId} />
                <div className="all-products">
                    <div>
                        {filteredProducts.map((product)=>(
                            <Product
                            key={product.id}
                            image= {product.image_url}
                            name= {product.name}
                            price= {product.price}
                            />
                        ))
                        };
                    </div>
                    <Product
                    key= {products[0].id}
                    image= {products[0].image_url}
                    name = {products[0].name}
                    price = {products[0].price}
                    />
                    <Product
                    //key= {products[0].id}
                    image= {products[0].image_url}
                    name = {products[0].name}
                    price = {products[0].price}
                    />
                    <Product
                    //key= {products[0].id}
                    image= {products[0].image_url}
                    name = {products[0].name}
                    price = {products[0].price}
                    />
                    <Product
                   // key= {products[0].id}
                    image= {products[0].image_url}
                    name = {products[0].name}
                    price = {products[0].price}
                    />
                    <Product
                   // key= {products[0].id}
                    image= {products[0].image_url}
                    name = {products[0].name}
                    price = {products[0].price}
                    />
                    <Product
                   // key= {products[0].id}
                    image= {products[0].image_url}
                    name = {products[0].name}
                    price = {products[0].price}
                    />
                    <Product
                   // key= {products[0].id}
                    image= {products[0].image_url}
                    name = {products[0].name}
                    price = {products[0].price}
                    />
                    <Product
                   // key= {products[0].id}
                    image= {products[0].image_url}
                    name = {products[0].name}
                    price = {products[0].price}
                    />
                    <Product
                    //key= {products[0].id}
                    image= {products[0].image_url}
                    name = {products[0].name}
                    price = {products[0].price}
                    />
                    <Product
                    //key= {products[0].id}
                    image= {products[0].image_url}
                    name = {products[0].name}
                    price = {products[0].price}
                    />
                    <Product
                   // key= {products[0].id}
                    image= {products[0].image_url}
                    name = {products[0].name}
                    price = {products[0].price}
                    />
                </div>    
            </div>
        </>
    );
};

export default Products;