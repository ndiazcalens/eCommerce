import React from "react";
import { useProducts } from "../hooks/useProducts";
import LateralNavbar from "../components/LateralNavBar";
import Product from "../components/Product"
import "../stylesheets/products.css"



const Products = () => {
    const { products, loading, error } = useProducts(); //llamo el hook donde hago el fetch de products
  
    if (loading == true) return <div className="loading">Cargando..</div>;
    if (error) return <div>Error: {error}</div>; 
    return(
        <>
            <div className="products-page" >
                <LateralNavbar />
                <div className="all-products">
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