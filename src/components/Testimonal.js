import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const mainStyle = {
  testimonalWrapper: {
    width: "100%",
    height: "50vh",
    backgroundColor: "#000",
    display: "flex",
  },
  playerWrapper: {
    
  },
  playerImg: {
    borderRadius: "50%",
    margin: "auto",
    display: "block"
  },
};

export default class Testimonials extends Component {
  render() {
    return (
      <div style={mainStyle.testimonalWrapper}>
        <div style={mainStyle.playerWrapper}>
          <div className="dialog-bottom">
            <h2>玩家：</h2>
            <p>不買會後悔不買會後悔不買會後悔不買會後悔不買會後悔</p>
          </div>
          <img style={mainStyle.playerImg} src="https://picsum.photos/100/100?random=31" />
        </div>

        <div style={mainStyle.playerWrapper}>
          <div className="dialog-bottom">
            <h2>玩家：</h2>
            <p>不買會後悔不買會後悔不買會後悔不買會後悔不買會後悔</p>
          </div>
          <img style={mainStyle.playerImg} src="https://picsum.photos/100/100?random=1" />
        </div>

        <div style={mainStyle.playerWrapper}>
          <div className="dialog-bottom">
            <h2>玩家：</h2>
            <p>不買會後悔不買會後悔不買會後悔不買會後悔不買會後悔</p>
          </div>
          <img style={mainStyle.playerImg} src="https://picsum.photos/100/100?random=8" />
        </div>
        
      </div>
    );
  }
}
