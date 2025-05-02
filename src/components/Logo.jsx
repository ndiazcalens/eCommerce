import React from "react";
import "../stylesheets/logo.css";
import logo_mate from "/images/logo_mate.jpg";

function Logo(){
    return(
        <div className="main-logo-container">
            <img className="main-logo" 
            src={logo_mate}
            alt="Main logo"
            />
        </div>
    );
}

export default Logo;