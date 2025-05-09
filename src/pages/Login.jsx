import React from "react";
import { From } from "../components/Form";
import "../stylesheets/login.css";

function Login (){
    return (
        <>
            <div className="login-page">
                <div className="login-container">
                    <h2 className="login-tittle">Iniciar sesión</h2>
                    <From/>
                </div>
            </div>
        </>
    )
}

export default Login;