import React from "react";
import styles from "./carousel.module.css";
var Carousel = require("react-responsive-carousel").Carousel;

const Element = (props) => {
  return (
    <div>
      <img alt="product" src={props.el.src} />
    </div>
  );
};

export default function DemoCarousel(props) {
  return (
    <div className={styles.wrapper}>
      <Carousel showArrows={true}>
        {props.list.map((el, index) => {
          return (
            <Element el={el} key={index}/>
          )
        })}
      </Carousel>
    </div>
  );
}
