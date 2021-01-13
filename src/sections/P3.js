import React, { Component } from "react";
import "../App.css";

import Navbars from "../sections/Navbars";
import Footer from "../components/Footer";
import Firefly from "../components/Firefly";
import Subbanner from "../components/Subbanner";
import LimitProducts from "../components/LimitProducts";
import Mvs from "../components/Mvs";
import Producers from "../components/Producers";
import Music from "../components/Music";
import Belt from "../components/Belt";
import Buynow from "../components/Buynow";
import buyNowImage from "../public/assets/images/icon_loading.png";


const navs = [
  { tag: "#video", id: "app.p3-nav1" },
  { tag: "#limit", id: "app.p3-nav2" },
  { tag: "#live", id: "app.p3-nav3" },
  { tag: "#try", id: "app.p3-nav4" },
  { tag: "https://www.crespirit.com", id: "app.p3-nav5" },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.limitRef = React.createRef();
    this.liveRef = React.createRef();
    this.tryRef = React.createRef();
    this.buynowRef = React.createRef();
  }
  state = {
    windowX: 0,
    videoTop: 0,
    limitTop: 0,
    liveTop: 0,
    tryTop: 0,
    buynowTop: 0,
    activatedIndex: "",
    amount: 0,
    locale: "zh",
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
    const winScroll = document.documentElement.scrollTop + window.innerHeight;

    if (winScroll >= this.state.tryTop && this.state.videoTop !== 0) {
      this.setState({
        activatedIndex: 3,
      });
    } else if (winScroll >= this.state.liveTop - 2500 && this.state.videoTop !== 0) {
      this.setState({
        activatedIndex: 2,
      });
    } else if (winScroll >= this.state.limitTop - 1900 && this.state.videoTop !== 0) {
      this.setState({
        activatedIndex: 1,
      });
    } else if (winScroll >= this.state.videoTop - 400 && this.state.videoTop !== 0) {
      this.setState({
        activatedIndex: 0,
      });
    } else if (winScroll > 969) {
      this.setState({
        activatedIndex: "",
      });
    }
  };
  handleChange = (e) => {
    this.setState({ locale: e.target.value });
    this.props.locale = e.target.value;
  };

  render() {
    if (this.videoRef.current !== null && this.state.videoTop === 0) {
      this.setState({ videoTop: this.videoRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.limitRef.current !== null && this.state.videoTop === 0) {
      this.setState({ limitTop: this.limitRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.liveRef.current !== null && this.state.videoTop === 0) {
      this.setState({ liveTop: this.liveRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.tryRef.current !== null && this.state.videoTop === 0) {
      this.setState({ tryTop: this.tryRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }
    if (this.buynowRef.current !== null && this.state.videoTop === 0) {
      this.setState({ buynowTop: this.buynowRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }
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
          />
        </header>
        <main>
          <div className="buynowbutton">
            <a target="_blank" href="/">
              <img src={buyNowImage} />
            </a>
          </div>
          <Firefly />
          <Subbanner />
          <div ref={this.videoRef}></div>
          <LimitProducts />
          <div ref={this.limitRef}></div>
          <Mvs />
          <div ref={this.liveRef}></div>
          <Belt />
          {/* <Producers /> */}
          <Music />
          <div ref={this.tryRef}></div>
          {/* <Buynow/> */}
          <div ref={this.buynowRef}></div>

          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
