import React, { Component } from "react";
import "../App.css";

import Navbars from "../sections/Navbars";
import Footer from "../components/Footer";
import Gather from "../components/Gather";
import Sticker from "../components/Sticker";

const navs = [{ tag: "#unlock", content: "集氣留言", id: "nav6" }];

class App extends Component {
  state = {
    windowX: 0,
    // unlockTop: 0,
    activatedIndex: "",
    amount: 0,
    locale: "zh",
    navStyle: "none"
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
              document.querySelector("body").style.height = "auto";
              document.querySelector("body").style.overflow = "auto";
              this.props.changed(e);
            }}
            activatedIndex={this.state.activatedIndex}
            navs={navs}
            bg={this.state.navStyle === "none" ? true : false}

          />
        </header>

        <main>
          {/* <Firefly /> */}
          <div ref={this.unlockRef}></div>
          <Gather amount={this.state.amount} />
          <Sticker amountChange={(amount) => this.amountChange(amount)} />
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
