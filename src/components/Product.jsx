import React from "react";
import { useCart } from "../context/CartProvider";
import styles from "./Product.module.css";

const Product = ({ id, img, price, title }) => {
  const { addItemToCart, cart } = useCart();
  function handleAdd() {
    for (let item of cart) {
      if (item.id === id) {
        alert("Item already added to cart");
        return;
      }
    }
    const newCartItem = {
      id: id,
      price: price,
      img: img,
      quantity: 1,
    };

    addItemToCart(newCartItem);
    alert("Item Added");
  }
  return (
    <div className={styles.product}>
      <img src={img} alt={title} className={styles.productImage} />
      <p className={styles.title}> {title}</p>
      <p className={styles.price}>&#8377; {price}</p>
      <button onClick={handleAdd} className={styles.addToCartBtn}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
