import React from 'react';
import "../stylesheets/product.css";


const Product = (data) =>{
    
    
    return (
        <div className='product-container'>
            <div className='product-img-container'>
                <img className='product-img' src = {data.image} alt= {data.name}/>
            </div>
            <div className='info-tittle-container'>
                <p className='name'>{data.name}</p>
                <p className='price'>${data.price.toLocaleString('es-AR')}</p>
            </div>
        </div>
    )
}

export default Product;