import React from "react";
import AddtoCart from "./AddtoCart";
import styles from './ProductCart.module.css'

const ProductCart = () => {
  return (
    <div className={styles.card}>
      <AddtoCart/>
    </div>
  );
};

export default ProductCart;
