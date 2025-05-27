import React from "react";
import "../stylesheets/home.css";
import Carousel from "../components/Carrousel";

import { Link } from "react-router-dom";


//importar base de datos

function Home(){

    return(
        <>
            
            <div className="home">
                <div className="featured-products">
                    <Carousel />
                </div>
                <Link to ="/products">
                    <button className="home-products">Conoce todos nuestros productos</button>
                </Link>
                <div className="line"></div>
                <div className="slogan">"El mate que te acompaña todos los dias, Con Ritmo De Mate"</div>
            </div>
        </>

    )
}

export default Home;