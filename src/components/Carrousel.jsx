import React, { useRef, useEffect, useState } from "react";
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import mate_torpedo from "/images/mate/mate_torpedo.png";
import combo_matero1 from "/images/combos/combo_matero1.jpg";
import mate_armado from "/images/mate/mate_armado.jpg";
import yerba_montania from "/images/yerbas/yerba_montania.jpg";
import "../stylesheets/carrousel.css";
import { AutoPlay } from "@egjs/flicking-plugins";
import { useProducts } from "../hooks/useProducts";
import Product from "../components/Product"



const Carousel = () => {


  const { products, loading, error } = useProducts(); //llamo el hook donde hago el fetch de products

  const plugins = useRef([new AutoPlay({ duration: 350, direction: "NEXT", stopOnHover: true })]);

  if (loading == true) return <div className="loading">Cargando..</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="carousel-container">
      <Flicking
        circular={true}
        panelsPerView={3}
        moveType="snap"
        align="center"
        plugins={plugins.current}
      >
      {/*TODO:poner el resto de los productos cuando haya armado la manera de cargar los productos manualmente desde la pagina*/}

      {products.slice(0, 6).map((product) => (
        <div className="panel" key={product.id}>
          <Product
            image={product.image_url}
            name={product.name}
            price={product.price}
          />
          
        </div>
        ))}

      </Flicking>
    </div>
  );
};

export default Carousel;


