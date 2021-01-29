import React, { Component } from "react";
import "./App.css";

import Navbars from "./sections/Navbars";
import Footer from "./components/Footer";
import Firefly from "./components/Firefly";
import Intro from "./components/Intro";

const navs = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.introRef = React.createRef();
    this.gatherRef = React.createRef();
    this.voteRef = React.createRef();
    this.timelineRef = React.createRef();
  }
  state = {
    windowX: 0,
    introTop: 0,
    scheduleTop: 0,
    judgeTop: 0,
    ruleTop: 0,
    prizeTop: 0,
    joinTop: 0,
    activatedIndex: "",
    amount: 0,
    locale: "zh",
    navStyle: "none",
    prevScrollpos: window.pageYOffset,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenToScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenToScroll);
  }
  amountChange = (amount) => {
    this.setState({ amount: amount });
  };

  listenToScroll = () => {
    var currentScrollPos = window.pageYOffset;
    if (this.state.prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-90px";
    }
    if (currentScrollPos > 10) {
      this.setState({ navStyle: "blue" });
    } else {
      this.setState({ navStyle: "none" });
    }
    this.setState({ prevScrollpos: currentScrollPos });
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
              this.props.changed(e);
            }}
            activatedIndex={this.state.activatedIndex}
            navs={navs}
            bg={this.state.navStyle === "none" ? true : false}
          />
        </header>

        <main>
          <Firefly />
          <Intro />
          <Footer
            locale={this.props.locale}
            changed={(e) => {
              this.props.changed(e);
            }}
          />
        </main>
      </div>
    );
  }
}

export default App;
