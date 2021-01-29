import React, { Component } from "react";
import Navbar from "../components/Navbar";
import logo from "../public/assets/images/logo.png";

class Navbars extends Component {
  state = {
    showPanel: false,
    activeIndex: null,
    locale: this.props.locale,
  };

  toggleHandler = (e) => {
    let width = window.innerWidth;
    if (width < 1100) {
      if (this.state.showPanel) {
        document.querySelector("body").style.height = "auto";
        document.querySelector("body").style.overflow = "auto";
      } else {
        document.querySelector("body").style.height = "100vh";
        document.querySelector("body").style.overflow = "hidden";
      }

      // if (this.state.showPanel && e.target.className.includes("nav-open")) {
      //   document.querySelector("body").style.height = "auto";
      //   document.querySelector("body").style.overflow = "auto";
      //   console.log(1)
      // }else if (this.state.showPanel && e.target.className.includes("inner")) {
      //   console.log(2)
      //   document.querySelector("body").style.height = "auto";
      //   document.querySelector("body").style.overflow = "auto";
      // }else if (!this.state.showPanel) {
      //   document.querySelector("body").style.height = "100vh";
      //   document.querySelector("body").style.overflow = "hidden";
      //   console.log(3)
      // } else if (this.state.showPanel && e.target.className.includes("link")) {
      //   document.querySelector("body").style.height = "auto";
      //   document.querySelector("body").style.overflow = "auto";
      //   console.log(4)
      // }
    }

    const newState = !this.state.showPanel;
    this.setState({ showPanel: newState });
  };

  clickHandler = (index) => {
    this.setState({ activeIndex: index });
  };
  handleChange = (e) => {
    this.setState({ locale: e.target.value });
    this.props.locale = e.target.value;
  };

  render() {
    let toggle = this.state.showPanel ? "active" : "";
    let open = this.state.showPanel ? "nav-close" : "";
    let style = "nav-open " + open;
    let barStyle = "navbar-menu " + toggle;
    return (
      <div id="navbar" className={this.props.bg ? "navbar navBarNone" : "navbar navBarBlack"}>
        <div className="fixed-width-nav">
          <div className="brand mobile-brand mobile">
            <a href="/">
              <img src={logo} alt="" />{" "}
            </a>
          </div>
          <button onClick={this.toggleHandler} href="#" className={style}>
            <div className="inner"></div>
          </button>

          <ul className={barStyle}>
            <div className="brand desktop">
              <a href="/">
                <img className="navbar-logo-m" src={logo} alt="公司Logo" />
              </a>
            </div>

            <div className="nav-lists">
              {this.props.navs.map((el, index) => {
                return <Navbar clicked={this.toggleHandler} key={index} activated={index === this.props.activatedIndex} tag={el.tag} content={el.content} id={el.id} />;
              })}
              <div className="select-wrapper">
                <select className="select-css" onChange={this.props.changed} value={this.state.locale.includes("zh") ? "zh" : "en-US"}>
                  <option value="zh">中文</option>
                  <option value="en-US">English</option>
                </select>
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbars;
