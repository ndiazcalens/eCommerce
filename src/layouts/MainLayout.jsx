import React from "react";
import Navbar from "../components/Navbar";
//import Logo from "../components/logo"
import Footer from '../components/Footer'
import '../stylesheets/mainLayout.css'
import { Outlet } from "react-router-dom";


function MainLayout (){
    return(
        <>
            <Navbar />
            <main>
                <Outlet /> {/* aca se renderiza la página específica según la ruta */}
            </main>
            <div className='mainLayout-footer'>
                <Footer/>
            </div>
        </>

    )
}

export default MainLayout;