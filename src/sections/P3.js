import React, { Component } from "react";
import "../App.css";

import Navbars from "../sections/Navbars";
// import LessonSlide from "./components/Carousel";
// import Award from "./components/Award";
// import FifthVideo from "./components/FifthVideo";
import Footer from "../components/Footer";
import Firefly from "../components/Firefly";

import Gather from "../components/Gather";
import Sticker from "../components/Sticker";
import Subbanner from "../components/Subbanner";
import LimitProducts from "../components/LimitProducts";
import Mvs from "../components/Mvs";
import Producers from "../components/Producers";
import Music from "../components/Music";
import Belt from "../components/Belt";
import Buynow from "../components/Buynow";

const navs = [
  { tag: "#products", id: "app.p3-nav1" },
  { tag: "#music", id: "app.p3-nav2" },
  { tag: "#producer", id: "app.p3-nav3" },
  { tag: "#rules", id: "app.p3-nav4" },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.productsRef = React.createRef();
    this.musicRef = React.createRef();
    this.producerRef = React.createRef();
    this.rulesRef = React.createRef();
  }
  state = {
    windowX: 0,
    productsTop: 0,
    musicTop: 0,
    producerTop: 0,
    rulesTop: 0,
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
    this.setState({amount: amount})
  }

  listenToScroll = () => {
    const winScroll = document.documentElement.scrollTop + window.innerHeight;

    if (winScroll >= this.state.rulesTop && this.state.productsTop !== 0) {
      this.setState({
        activatedIndex: 3,
      });
    } else if (winScroll >= this.state.producerTop && this.state.productsTop !== 0) {
      this.setState({
        activatedIndex: 2,
      });
    } else if (winScroll >= this.state.musicTop && this.state.productsTop !== 0) {
      this.setState({
        activatedIndex: 1,
      });
    } else if (winScroll >= this.state.productsTop - 200 && this.state.productsTop !== 0) {
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
      
    if (this.productsRef.current !== null && this.state.productsTop === 0) {
      this.setState({ productsTop: this.productsRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.musicRef.current !== null && this.state.productsTop === 0) {
      this.setState({ musicTop: this.musicRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.producerRef.current !== null && this.state.productsTop === 0) {
      this.setState({ producerTop: this.producerRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
    }

    if (this.rulesRef.current !== null && this.state.productsTop === 0) {
      this.setState({ rulesTop: this.rulesRef.current.getBoundingClientRect().top + document.documentElement.scrollTop });
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
          <Firefly />

          <Subbanner/>
          
          <div ref={this.productsRef}></div>
          <LimitProducts/>

          <div ref={this.musicRef}></div>
          <Mvs/>

          <div ref={this.producerRef}></div>
          <Producers />

          <Music/>

          <Belt/>

          <div ref={this.rulesRef}></div>
          <Buynow/>

        

          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
