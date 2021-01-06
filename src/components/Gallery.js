import React, { Component } from "react";
import styles from "./gallery.module.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.outerStyle = {
      position: "fixed",
      top: "120px",
      left: 0,
      width: "100%",
      height: "85%",
      overflow: "auto",
      zIndex: 5,
    };

    // default style
    this.style = {
      modal: {
        position: "relative",
        width: "800px",
        padding: 20,
        boxSizing: "border-box",
        backgroundColor: "#fff",
        margin: "40px auto",
        borderRadius: 3,
        zIndex: 2,
        textAlign: "left",
        boxShadow: "0 20px 30px rgba(0, 0, 0, 0.2)",
        ...this.props.style.modal,
      },
      overlay: {
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
        ...this.props.style.overlay,
      },
    };
  }
  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  clicked = (index) => {
    console.log(index)
  }
  

  // render modal
  render() {
    return (
      <>
        <div className={this.props.selected ? `${styles.pic} ${styles.selected}`  : `${styles.pic}`}  onClick={this.toggle}>
          <img src={this.props.src} />
        </div>
        <div
          style={{
            ...this.outerStyle,
            display: this.state.open ? "block" : "none",
          }}
        >
          <div style={this.style.overlay} onClick={this.toggle} />
          <div onClick={this.toggle} />
          <div onClick={this.toggle} className={styles.rules}>
            {this.props.children}
          </div>
        </div>
      </>
    );
  }
}

export default Gallery;
