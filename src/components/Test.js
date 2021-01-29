import React, { Component } from "react";
import { Stage, Layer, Image, Text } from "react-konva";
import useImage from "use-image";
import styles from "./test.module.css";
import tag from "../public/assets/images/tag.png";
import Title from "./Title";
import image from '../public/assets/images/icon_loading.png'
import { FormattedMessage } from "react-intl";

const LionImage = (props) => {
  const [image] = useImage(tag);

  return <Image x={props.x} y={props.y} width={props.width} height={props.height} image={image} />;
};

function kickOut(array) {
  let newArray = array.filter((el) => el.x > -310);
  return newArray;
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Firefly {
  constructor(index, x) {
    this.x = x || window.innerWidth;
    this.y = randomInteger(0, window.innerHeight - 100);
    this.width = 330;
    this.height = 50;
    this.speed = Math.floor(Math.random() * 20 + 5);
    this.index = index;
  }
  move() {
    this.x -= this.speed;
  }
}

function generateShapes(array, length) {
  let newFly = new Firefly(Math.floor(Math.random() * length));
  array.push(newFly);

  return array;
}

class ColoredRect extends React.Component {
  state = {
    messages: this.props.messages,
    activating: [],
    count: 10,
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.messages !== this.state.messages) {
      this.setState({ messages: nextProps.messages });
    }
  }

  componentDidMount() {
    this.timerID = setInterval(this.handleClick, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  handleClick = () => {
    if (this.state.messages.length > 0) {
      let newCount = this.state.count;
      let newArray = this.state.activating;
      if (this.state.count === 0) {
        let updatedArr = generateShapes(newArray, this.props.count);
        this.setState({ activating: updatedArr });
      } else {
        let updatedArr = kickOut(newArray);
        this.setState({ activating: updatedArr });
      }

      this.fliesMove();
      if (newCount !== 0) {
        newCount--;
      } else {
        newCount = 10;
      }
      this.setState({ count: newCount });
    }
  };

  fliesMove = () => {
    this.state.activating.map((el) => {
      el.move();
      return true
    });
  };

  render() {
    let fliesArray = this.state.activating.map((el, i) => {
      return (
        <>
          <LionImage key={i} x={el.x} y={el.y} width={el.width} height={el.height} />
          <Text x={el.x + 30} y={el.y + 30} text={`${this.props.messages[el.index].name} : ${this.props.messages[el.index].content}`} />
        </>
      );
    });
    return fliesArray;
  }
}

class Banner extends Component {
  render() {
    return (
      <div className={styles.gatherWrapper}>
        <div className={ this.props.count !== 0 ? `${styles.hidden}` : `${styles.loading}`}>
          <img alt="loading" src={image}/>
        </div>
        <div id="gather" className="buffer"></div>
        <div className={styles.headWrapper}>
          <Title id="app.p2-p2-1" />
          <div className="subtitle">
            <p>
              <FormattedMessage id="app.p2-p2-2-1" />
            </p>
            <p>
              <FormattedMessage id="app.p2-p2-2-2" />
            </p>
          </div>
        </div>

        <Stage className={styles.flyright} width={window.innerWidth} height={window.innerHeight}>
          <Layer className="bannerImg">
            <ColoredRect messages={this.props.messages} count={this.props.count} />
          </Layer>
        </Stage>
      </div>
    );
  }
}
export default Banner;
