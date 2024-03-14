import React from "react";
import { useCart } from "../context/CartProvider";
import styles from "./CartItem.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";
const CartItem = ({ id, price, img, title, quantity }) => {
  const { increaseQty, decreaseQty, removeQty } = useCart();
  return (
    <div className={styles.cartItem}>
      {/* left */}
      <div className={styles.imgAndTitle}>
        <div className={styles.imgContainer}>
          <img src={img} alt={title} className={styles.cartImage} />
        </div>
        <h3>{title}</h3>
      </div>
      {/* right */}
      <div className={styles.otherControls}>
        <div className={styles.qtyInput}>
          <button
            onClick={() => {
              if (quantity <= 1) {
                return;
              }
              decreaseQty(id);
            }}
          >
            <AiOutlineMinus />
          </button>
          <span className={styles.quantityDisplay}>{quantity}</span>
          <button
            onClick={() => {
              increaseQty(id);
            }}
          >
            <AiOutlinePlus />
          </button>
        </div>
        <p>&#8377; {price * quantity}</p>
        <button
          onClick={() => {
            removeQty(id);
          }}
          className={styles.removeItemBtn}
        >
          <ImCross />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
