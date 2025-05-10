import React from "react";
import { FaCartShopping } from "react-icons/fa6";

function Cart(){
    return(
        <>
            <label className="cart-btn" htmlFor="cart-btn">
                <FaCartShopping />
            </label>
            <input type="checkbox" hidden/>

            <aside className="cart">
                <ul>
                    <li>nombre</li>
                    <li>foto</li>
                    <li>precio</li>
                    <li>cantidad</li>
                </ul>
            </aside>

        </>
    )
}

export default Cart;