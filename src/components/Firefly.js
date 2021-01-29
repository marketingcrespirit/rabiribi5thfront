import React, { Component } from "react";
import { Stage, Layer, Image } from "react-konva";
import firefly from "../public/assets/icons/firefly.png";
import useImage from "use-image";
import styles from "./firefly.module.css";
import Button from "./Button";
import bannerTxt from "../public/assets/images/text_banner.png";
import { FormattedMessage } from "react-intl";


const w_left = window.innerWidth * 0.15;
const w_right = window.innerWidth * 0.4;
const h = window.innerHeight;

const LionImage = (props) => {
  const [image] = useImage(firefly);
  return <Image x={props.x} y={props.y} width={props.width} rotation={props.ang * 5} height={props.height} image={image} />;
};

class FireflyL {
  constructor() {
    this.x = Math.random() * w_left;
    this.y = Math.random() * h;
    this.s = Math.random() * 6;
    this.ang = Math.random() * 2 * Math.PI;
    this.v = (this.s * this.s) / 8;
    if (this.x < w_left * 0.5 && this.x > w_left * 0.25) {
      this.x = 0;
    }
  }
  move() {
    if (this.s <= 0) {
      this.s = Math.random() * 6;
    }

    if (this.x > w_left) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = w_left;
    }
    if (this.y < 0) {
      this.y = h;
    }
    if (this.y > h) {
      this.y = 0;
    }
    this.s -= 0.05;
    this.x += this.v * Math.cos(this.ang);
    this.y += this.v * Math.sin(this.ang);

    this.ang += (Math.random() * 20 * Math.PI) / 180 - (10 * Math.PI) / 180;
  }
}

class FireflyR {
  constructor() {
    this.x = Math.random() * w_right;
    this.y = Math.random() * h;
    this.s = Math.random() * 6;
    this.ang = Math.random() * 2 * Math.PI;
    this.v = (this.s * this.s) / 8;
    if (this.x < w_right * 0.5 && this.x > w_right * 0.25) {
      this.x = 0;
    }
  }
  move() {
    if (this.s <= 0) {
      this.s = Math.random() * 6;
    }

    if (this.x > w_right) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = w_right;
    }
    if (this.y < 0) {
      this.y = h;
    }
    if (this.y > h) {
      this.y = 0;
    }
    this.s -= 0.05;
    this.x += this.v * Math.cos(this.ang);
    this.y += this.v * Math.sin(this.ang);

    this.ang += (Math.random() * 20 * Math.PI) / 180 - (10 * Math.PI) / 180;
  }
}

function generateShapesL() {
  let array = [];
  for (let i = 0; i < 10; i++) {
    let newFly = new FireflyL();
    array.push(newFly);
  }
  return array;
}

function generateShapesR() {
  let array = [];
  for (let i = 0; i < 10; i++) {
    let newFly = new FireflyR();
    array.push(newFly);
  }
  return array;
}
class ColoredRectL extends React.Component {
  state = {
    color: "yellow",
    flies: generateShapesL(),
  };
  componentDidMount() {
    this.timerID = setInterval(this.handleClick, 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  handleClick = () => {
    this.fliesMove();
  };
  fliesMove = () => {
    let newArray = [];
    this.state.flies.map((el) => {
      el.move();
      newArray.push(el);
      return true
    });
    this.setState({ flies: newArray });
  };

  render() {
    let fliesArray = this.state.flies.map((el, i) => {
      return <LionImage key={i} x={el.x} y={el.y} v={el.v} width={el.s * 10} ang={el.ang} height={el.s * 10} radius={el.s} fill={this.state.color} shadowBlur={5} onClick={this.handleClick} />;
    });
    return fliesArray;
  }
}

class ColoredRectR extends React.Component {
  state = {
    color: "yellow",
    flies: generateShapesR(),
  };
  componentDidMount() {
    this.timerID = setInterval(this.handleClick, 50);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  handleClick = () => {
    this.fliesMove();
  };
  fliesMove = () => {
    let newArray = [];
    this.state.flies.map((el) => {
      el.move();
      newArray.push(el);
      return true
    });
    this.setState({ flies: newArray });
  };

  render() {
    let fliesArray = this.state.flies.map((el, i) => {
      return <LionImage key={i} x={el.x} y={el.y} v={el.v} width={el.s * 10} ang={el.ang} height={el.s * 10} radius={el.s} fill={this.state.color} shadowBlur={5} onClick={this.handleClick} />;
    });
    return fliesArray;
  }
}

class Banner extends Component {
  render() {
    return (
      <div className="bannerWrapper">
        <div className={styles.bannerTxtWrapper}>
          <div className={styles.bannerTxt}>
            <div className={styles.bannerInner}>
              <img alt="5th anniversity" src={bannerTxt} />
              <div className={styles.buttonWrapper}>
                <Button href="https://www.crespirit.com/prods-list/">
                  <h2><FormattedMessage id="app.p3-28"></FormattedMessage></h2>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <Stage className={styles.flyleft} width={window.innerWidth * 0.2} height={window.innerHeight}>
            <Layer className="bannerImg">
              <ColoredRectL />
            </Layer>
          </Stage>
          <Stage className={styles.flyright} width={window.innerWidth * 0.4} height={window.innerHeight}>
            <Layer className="bannerImg">
              <ColoredRectR />
            </Layer>
          </Stage>
        </div>
      </div>
    );
  }
}
export default Banner;
