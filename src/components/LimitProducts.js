import React from "react";
import Button from "./Button";
import styles from './limitproducts.module.css'
import Pagebreak_1 from "./Pagebreak_1";
import ProductCard from "./ProductCard";
import Title from "./Title";

const products = [
  { name: "交響樂數位版CD", price: 1000 },
  { name: "交響樂Skin DLC", price: 1000 },
  { name: "交響樂實體版", price: 1000 },
];

const LimitProducts = () => {
  return (
    <div className={styles.limitProductsWrapper}>
        <Title id="五週年限定商品"/>
        <div className={styles.limitProducts}>
      {products.map((el, index) => {
        return <ProductCard key={index} name={el.name} price={el.price} />;
      })}
      </div>

      
      <div className={styles.buttonWrapper}>
          <Button><h2>馬上預購</h2></Button>
      </div>

      <Pagebreak_1 />
    </div>
  );
};

export default LimitProducts;
