import React, { Component } from "react";
import Navbar from "../components/Navbar";
import logo from "../public/assets/icons/logo_b.png";

class Navbars extends Component {
  state = {
    showPanel: false,
    activeIndex: null,
    locale: this.props.locale,
  };

  toggleHandler = () => {
    const newState = !this.state.showPanel;
    this.setState({ showPanel: newState });
  };

  clickHandler = (index) => {
    this.setState({ activeIndex: index });
    console.log(index);
  };
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ locale: e.target.value });
    this.props.locale = e.target.value;
  };

  render() {
    let toggle = this.state.showPanel ? "active" : "";
    let open = this.state.showPanel ? "nav-close" : "";
    let style = "nav-open " + open;
    let barStyle = "navbar-menu " + toggle;
    return (
      <div className="navbar">
        <div className="fixed-width-nav">
          <div className="brand mobile-brand mobile">
            <a href="#top">
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
                <select className="select-css" onChange={this.props.changed} value={this.state.locale.includes('zh')? 'zh': 'en-US'}>
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
