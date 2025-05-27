import React from "react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import '../stylesheets/mainLayout.css'
import Cart from "../pages/Cart.jsx";

import { Outlet } from "react-router-dom";
import { ProductsTypeIdProvider } from '../context/productTypeContext.jsx'

function MainLayout (){
    return(
        <>
            <ProductsTypeIdProvider>
                <Navbar />
                <Cart />
                <main>
                    <Outlet /> {/* aca se renderiza la página específica según la ruta */}
                </main>
            </ProductsTypeIdProvider>
            <div className='mainLayout-footer'>
                <Footer/>
            </div>
        </>

    )
}

export default MainLayout;