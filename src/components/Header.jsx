import React from "react";
import Modal from "./UI/Modal";
import Cart from "./Cart";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Container from "./UI/Container";
import { BsCartFill } from "react-icons/bs";
import { useCart } from "../context/CartProvider";
const Header = () => {
  const { cart } = useCart();
  const totalQunatity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  function closeModal() {
    setIsModalOpen(false);
  }
  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isModalOpen]);
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h1>Online Shop</h1>
          <button
            className={styles.showCartBtn}
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <span className={styles.cartIconAndNumber}>
              <BsCartFill />
              {totalQunatity > 0 && (
                <span className={styles.number}>{totalQunatity}</span>
              )}
            </span>
            <span>Cart</span>
          </button>
        </nav>
      </Container>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <Cart />
        </Modal>
      )}
    </header>
  );
};

export default Header;
