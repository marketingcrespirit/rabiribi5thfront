import React from "react";
import Button from "./Button";
import styles from "./limitproducts.module.css";
import Pagebreak1 from "./Pagebreak_1";
import Title from "./Title";
import bigPic from "../public/assets/images/pic_product_01.png";
import product02 from "../public/assets/images/pic_product_02.jpg";
import product03 from "../public/assets/images/pic_product_03.jpg";
import product04 from "../public/assets/images/pic_product_04.jpg";
import { FormattedMessage } from "react-intl";

const LimitProducts = (props) => {
  return (
    <div className={styles.limitProductsWrapper}>
      <div id="limit"></div>
      <div className="widthController">
        <div className={styles.headWrapper}>
          <Title id="app.p3-23" />
        </div>

        <div className={styles.limitProducts}>
          <div className={styles.bigProductWrapper}>
            <div className={styles.bigProductImgWrapper}>
              <img alt="limited product" src={bigPic} />
              <p>
                <FormattedMessage id="app.p3-24"></FormattedMessage>
              </p>
            </div>
            <div className={styles.bigProductTxtWrapper}>
              <h2>
                <FormattedMessage id="app.p3-25"></FormattedMessage>
              </h2>
              <h1>
                <FormattedMessage id="app.p3-26"></FormattedMessage>
              </h1>
              <p>
                <FormattedMessage id="app.p3-27"></FormattedMessage>
              </p>

              <div className={styles.buttonWrapperBigProduct} onClick={props.clicked}>
                <Button>
                  <h2>
                    <FormattedMessage id="app.p3-28"></FormattedMessage>
                  </h2>
                </Button>
              </div>
            </div>
          </div>

          <Pagebreak1 />
          <div className={styles.headWrapper}>
            <Title id="app.p3-29" />
          </div>
          <div className={styles.music}>
            <div className={styles.carouselWrapper}>
              <img alt="product" src={product02} />
            </div>

            <div className={styles.musicLower}>
              <div className={styles.musicLowerHead}>
                <h2>
                  <FormattedMessage id="app.p3-30"></FormattedMessage>
                </h2>
                <h2>
                  <FormattedMessage id="app.p3-31"></FormattedMessage>
                </h2>
              </div>
              <div className={styles.musicLowerTxt}>
                <p>
                  <FormattedMessage id="app.p3-32"></FormattedMessage>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.music}>
            <div className={styles.carouselWrapper}>
              <img alt="product" src={product03} />
            </div>

            <div className={styles.musicLower}>
              <div className={styles.musicLowerHead}>
                <h2>
                  <FormattedMessage id="app.p3-33"></FormattedMessage>
                </h2>
                <h2>
                  <FormattedMessage id="app.p3-34"></FormattedMessage>
                </h2>
              </div>
              <div className={styles.musicLowerTxt}>
                <p>
                  <FormattedMessage id="app.p3-35"></FormattedMessage>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.music}>
            <div className={styles.carouselWrapper}>
              <img alt="product" src={product04} />
            </div>

            <div className={styles.musicLower}>
              <div className={styles.musicLowerHead}>
                <h2>
                  <FormattedMessage id="app.p3-36"></FormattedMessage>
                </h2>
                <h2>
                  <FormattedMessage id="app.p3-37"></FormattedMessage>
                </h2>
              </div>
              <div className={styles.musicLowerTxt}>
                <p>
                  <FormattedMessage id="app.p3-38"></FormattedMessage>
                </p>
              </div>
            </div>
          </div>
          <p className={styles.center}><FormattedMessage id="app.p3-38-1"></FormattedMessage></p>
        </div>

        <div className={styles.buttonFlexWrapper}>
          <div className={styles.buttonWrapper}>
            <Button href="https://www.crespirit.com/prods-list/">
              <h2>
                <FormattedMessage id="app.p3-28"></FormattedMessage>
              </h2>
            </Button>
          </div>
        </div>

        <Pagebreak1 />
      </div>
    </div>
  );
};

export default LimitProducts;
