import React, { Component } from "react";
import { Stage, Layer, Image } from "react-konva";
import firefly from "../public/assets/icons/firefly.png";
import useImage from "use-image";
import styles from "./firefly.module.css";

const w = window.innerWidth;
const h = window.innerHeight;

const LionImage = (props) => {
  const [image] = useImage(firefly);
  return <Image x={props.x} y={props.y} width={props.width} height={props.height} image={image} />;
};

class Firefly {
  constructor() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.s = Math.random() * 6;
    this.ang = Math.random() * 2 * Math.PI;
    this.v = (this.s * this.s) / 8;
    if (this.x < w * 0.5 && this.x > w * 0.25) {
      this.x = 0;
    }
  }
  move() {
    if (this.x > w) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = w;
    }
    if (this.y < 0) {
      this.y = h;
    }
    if (this.y > h) {
      this.y = 0;
    }
    if (this.x < w * 0.5 && this.x > w * 0.25) {
      this.v *= -1;
      // this.x =  w;
    }
    this.x += this.v * Math.cos(this.ang);
    this.y += this.v * Math.sin(this.ang);
    this.ang += (Math.random() * 20 * Math.PI) / 180 - (10 * Math.PI) / 180;
  }
}

function generateShapes() {
  let array = [];
  for (let i = 0; i < 20; i++) {
    let newFly = new Firefly();
    array.push(newFly);
  }
  return array;
}

class ColoredRect extends React.Component {
  state = {
    color: "yellow",
    flies: generateShapes(),
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
    });
    this.setState({ flies: newArray });
  };

  render() {
    let fliesArray = this.state.flies.map((el, i) => {
      return <LionImage key={i} x={el.x} y={el.y} width={el.s * 10} height={el.s * 10} radius={el.s} fill={this.state.color} shadowBlur={5} onClick={this.handleClick} />;
    });
    return fliesArray;
  }
}

class Banner extends Component {
  render() {
    return (
      <div className="bannerWrapper">
        <div className={styles.bannerTxt}></div>
        <Stage className="banner" width={window.innerWidth} height={window.innerHeight}>
          <Layer className="bannerImg">
            <ColoredRect />
          </Layer>
        </Stage>
      </div>
    );
  }
}
export default Banner;
