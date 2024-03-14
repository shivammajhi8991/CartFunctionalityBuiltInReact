import React from "react";
import { useCart } from "../context/CartProvider";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

const Cart = () => {
  const { cart } = useCart();

  const totalAmount = cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  if (cart.length === 0) {
    return <h1>No Item Found !!</h1>;
  }
  return (
    <div className={styles.cart}>
      <h2 className={styles.cartheading}>Shopping Cart</h2>
      <div>
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
      </div>
      <h1>total Amount : &#8377; {totalAmount}</h1>
    </div>
  );
};

export default Cart;
