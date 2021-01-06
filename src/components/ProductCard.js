import React from "react";
import styles from "./productcard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.productCardWrapper}>
      <div className={styles.productCardTxtWrapper}>
        <h2>交響樂數位版CD</h2>
        <small>NT 1,000</small>
      </div>
    </div>
  );
};

export default ProductCard;
