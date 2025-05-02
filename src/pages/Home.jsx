import React from "react";
import "../stylesheets/home.css";
import Carousel from "../components/Carrousel";



//importar base de datos

function Home(){

    return(
        <>
            <div className="home">
                <div className="featured-products">
                    <Carousel />
                </div>
                <div className="promotions">
                    <p>TRES PRODUCTOS EN PROMOCION</p>
                </div>
                <div className="testimonies">FRASES TIPICAS DE MARCAS DE ZAPAS O TESTIMONIOS</div>
            </div>
        </>

    )
}

export default Home;