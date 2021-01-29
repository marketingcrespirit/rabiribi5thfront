import React, { Component } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import styles from "./rules.module.css";
import Navbars from "../sections/Navbars";
import step1 from "../public/assets/images/pic_orderstep_01.png";
import step2 from "../public/assets/images/pic_orderstep_02.png";
import step3 from "../public/assets/images/pic_orderstep_03.png";
import step4 from "../public/assets/images/pic_orderstep_04.png";

import step1en from "../public/assets/images/en_order_01.png";
import step2en from "../public/assets/images/en_order_02.png";
import step3en from "../public/assets/images/en_order_03.png";
import step4en from "../public/assets/images/en_order_04.png";

import arrow from "../public/assets/images/arrow.png";
import Pagebreak1 from "../components/Pagebreak_1";
import Pagebreak2 from "../components/Pagebreak_2";
import { FormattedMessage } from "react-intl";

const rules = ["app.p3-64", "app.p3-65", "app.p3-66", "app.p3-67", "app.p3-68", "app.p3-69", "app.p3-70"];

const navs = [];

const steps = [
  { src: step1, srcEn: step1en, content: "app.p3-58" },
  { src: step2, srcEn: step2en, content: "app.p3-59" },
  { src: step3, srcEn: step3en, content: "app.p3-60" },
  { src: step4, srcEn: step4en, content: "app.p3-61" },
];

const Step = (props) => {
  return (
    <div className={styles.lightWrapper}>
      <img className={styles.step} alt="lamp" src={props.locale.includes('zh')? props.src.src : props.src.srcEn} />
      <div className={styles.txtTimelineWrapper}>
        <h1>{props.index}</h1>
        <p>
          <FormattedMessage id={props.content} />
          {/* {props.content} */}
        </p>
      </div>
      <img className={styles.arrow} alt="arrow" src={arrow} />
    </div>
  );
};

class Rules extends Component {
  state = {
    windowX: 0,
    productsTop: 0,
    musicTop: 0,
    producerTop: 0,
    rulesTop: 0,
    activatedIndex: "",
    amount: 0,
  };
  amountChange = (amount) => {
    this.setState({ amount: amount });
  };
  handleChange = (e) => {
    this.setState({ locale: e.target.value });
    this.props.locale = e.target.value;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbars
            locale={this.props.locale}
            changed={(e) => {
              document.querySelector("body").style.height = "auto";
              document.querySelector("body").style.overflow = "auto";
              this.props.changed(e);
            }}
            activatedIndex={this.state.activatedIndex}
            navs={navs}
          />
        </header>
        <main className={styles.ruleWrapper}>
          <div className={styles.innerWrapper}>
            <div className={styles.titleWrapper}>
              <Title id="app.p3-57" />
            </div>

            <div className={styles.stepsWrapper}>
              {steps.map((el, index) => {
                return <Step locale={this.props.locale} src={el} content={el.content} index={index + 1} key={index} />;
              })}
            </div>

            <Pagebreak2 />

            <Pagebreak1 />

            <div className={styles.titleWrapper}>
              <Title id="app.p3-62" />
            </div>
            <p>
              <FormattedMessage id="app.p3-63" />
            </p>
            <p>
              <FormattedMessage id="app.p3-63-1" />
            </p>
            <h2 className={styles.yellow}>
              <FormattedMessage id="app.p3-63-2" />
              
            </h2>
            <ol className={styles.ul}>
              {rules.map((el, index) => {
                return (
                  <li key={index}>
                    <FormattedMessage id={el} />
                  </li>
                );
              })}
              <p><FormattedMessage id="app.p3-71" /></p>
              <p><FormattedMessage id="app.p3-72" /></p>
            </ol>

            <h2 className={styles.yellow}>
              <FormattedMessage id="app.p3-74" />
            </h2>
            <p>
              <FormattedMessage id="app.p3-75-1" /><a href="https://www.crespirit.com/contact-us/"><FormattedMessage id="app.p3-133" /></a><FormattedMessage id="app.p3-75-2" />
            </p>

            <h2 className={styles.yellow}>
              <FormattedMessage id="app.p3-76" />
            </h2>
            <p>
              <FormattedMessage id="app.p3-77" />
            </p>
            <br />
            <p>
              <FormattedMessage id="app.p3-78" />
            </p>
            <p>
              <FormattedMessage id="app.p3-79" />
            </p>
            <p>
              <FormattedMessage id="app.p3-80" />
            </p>
            <p>
              <FormattedMessage id="app.p3-81" />
            </p>

            <h2 className={styles.yellow}>
              <FormattedMessage id="app.p3-82" />
            </h2>
            <p>
              <FormattedMessage id="app.p3-83" />
            </p>
            <p>
              <FormattedMessage id="app.p3-84" />
            </p>
            <p>
              <FormattedMessage id="app.p3-85" />
            </p>
            <p>
              <FormattedMessage id="app.p3-86" />
            </p>
            <br />
            {/* <p>
              <FormattedMessage id="app.p3-87" />
            </p>
            <p>
              <FormattedMessage id="app.p3-88" />
            </p> */}
            {/* <p>
              <FormattedMessage id="app.p3-89" />
            </p>
            <p>
              <FormattedMessage id="app.p3-90" />
            </p>
            <p>
              <FormattedMessage id="app.p3-91" />
            </p> */}

            <h2 className={styles.yellow}>
              <FormattedMessage id="app.p3-92" />
            </h2>
            <p>
              <FormattedMessage id="app.p3-93" />
            </p>
            <p>
              <FormattedMessage id="app.p3-94" />
            </p>
            <p>
              <FormattedMessage id="app.p3-95" />
            </p>
            <br />
            <p>
              <FormattedMessage id="app.p3-96" />
            </p>
            <p>
              <FormattedMessage id="app.p3-97" />
            </p>
            <p>
              <FormattedMessage id="app.p3-98" />
            </p>
            <p>
              <FormattedMessage id="app.p3-99" />
            </p>
            <br />
            <p>
              <FormattedMessage id="app.p3-100" />
            </p>
            <p>
              <FormattedMessage id="app.p3-101" />
            </p>
            <p>
              <FormattedMessage id="app.p3-102-1" /><a href="https://www.crespirit.com/contact-us/"><FormattedMessage id="app.p3-133" /></a><FormattedMessage id="app.p3-102-2" />
            </p>

            {/* <h2 className={styles.yellow}>
              <FormattedMessage id="app.p3-103" />
            </h2>
            <p>
              <FormattedMessage id="app.p3-104" />
            </p>
            <ul className={styles.ul}>
              <li>
                <FormattedMessage id="app.p3-105" />
              </li>
              <li>
                <FormattedMessage id="app.p3-106" />
              </li>
            </ul>
            <p>
              <FormattedMessage id="app.p3-107" />
            </p>
            <ul className={styles.ul}>
              <li>
                <FormattedMessage id="app.p3-108" />
              </li>
              <li>
                <FormattedMessage id="app.p3-109" />
              </li>
            </ul> */}

            {/* <p>
              <FormattedMessage id="app.p3-110" />
            </p> */}
            {/* <ul className={styles.ul}>
              <li>
                <FormattedMessage id="app.p3-111" />
              </li>
              <li>
                <FormattedMessage id="app.p3-112" />
              </li>
              <li>
                <FormattedMessage id="app.p3-113" />
              </li>
            </ul> */}

            <h2 className={styles.yellow}>
              <FormattedMessage id="app.p3-114" />
            </h2>
            <p>
              <FormattedMessage id="app.p3-115" />
            </p>
            <ol className={styles.ul}>
              <li>
                <FormattedMessage id="app.p3-116" />
              </li>
              <li>
                <FormattedMessage id="app.p3-117" />
              </li>
              <li>
                <FormattedMessage id="app.p3-118" />
              </li>
              <li>
                <FormattedMessage id="app.p3-119" />
              </li>
              <li>
                <FormattedMessage id="app.p3-120" />
              </li>
              <li>
                <FormattedMessage id="app.p3-121" />
              </li>
            </ol>
            <p>
              <FormattedMessage id="app.p3-122" />
            </p>
            <p>
              <FormattedMessage id="app.p3-123" />
            </p>

            <h2 className={styles.yellow}>
              <FormattedMessage id="app.p3-124" />
            </h2>
            <p>
              <FormattedMessage id="app.p3-125" />
              <a className={styles.link} href="https://www.crespirit.com/prods-list/">
                <FormattedMessage id="app.p3-126" />
              </a>
              <FormattedMessage id="app.p3-127" />
            </p>
            <br />
            <p>
              <FormattedMessage id="app.p3-128" />
            </p>
            <br />
            <p>
              <FormattedMessage id="app.p3-129" />
            </p>
            <br />
            <p>
              <FormattedMessage id="app.p3-130" />
            </p>
            <h2 className={styles.yellow}>
              <FormattedMessage id="app.p3-131" />
            </h2>
            <p>
              <FormattedMessage id="app.p3-132" />
              <a className={styles.link} href="/">
                <FormattedMessage id="app.p3-133" />
              </a>
              <FormattedMessage id="app.p3-134" />
            </p>
          </div>
          <div className={styles.buttonWrapper}>
            <Button href="https://www.crespirit.com/prods-list/">
              <h2>
                <FormattedMessage id="app.p3-135" />
              </h2>
            </Button>
          </div>
        </main>
      </div>
    );
  }
}

export default Rules;
