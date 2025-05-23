import { useId } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { MdKeyboardBackspace } from "react-icons/md";
import "../stylesheets/cart.css";

function Cart() {
  const cartCheckboxId = useId(); // genera ID único para el input
  const backCheckboxId = useId(); // genera ID único para el input

  return (
    <div className="cart-page">
      <input type="checkbox" id={cartCheckboxId} hidden />

      <label className="cart-btn" htmlFor={cartCheckboxId}>
        <FaCartShopping />
      </label>

      <aside className="cart">
        <h2 className="cart-tittle">Carrito de compras</h2>
        <div className="line"></div>
        <input type="checkbox" id={backCheckboxId} hidden />

        <label className="back-btn" htmlFor={cartCheckboxId}>
            <MdKeyboardBackspace />
        </label>
        <p className="cart-tittle">Tu carrito esta vacío</p>
      </aside>

    </div>
  );
}

export default Cart;