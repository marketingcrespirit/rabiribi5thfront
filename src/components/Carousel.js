import React from "react";
var classNames = require("classnames");

class LessonSlide extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { title: "Item 1", content: "Description 1", src: "https://picsum.photos/600/500?random=5" },
        { title: "Item 2", content: "Description 2", src: "https://picsum.photos/600/500?random=6" },
        { title: "Item 3", content: "Description 3", src: "https://picsum.photos/600/500?random=7" },
        { title: "Item 4", content: "Description 4", src: "https://picsum.photos/600/500?random=8" },
      ],
      active: 1,
      direction: "",
    };
    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
    this.setActive = this.setActive.bind(this);
  }

  renderSlides(item, index) {
    let position;

    const { active } = this.state;

    if (active === index) {
      position = "active";
    } else if (active === index + 1) {
      position = "prev";
    } else if (active === index - 1) {
      position = "next";
    } else if (active > index) {
      position = "left";
    } else if (active < index) {
      position = "right";
    }

    return (
      <div key={item.title} className={position ? `SliderItem ${position}` : "SliderItem"}>
        <div className="SliderItem__wrapper">
          <div className="SliderItem__container">
            
            <img src={item.src} />
          </div>
        </div>
      </div>
    );
  }

  renderSliderNav() {
    const slides = this.state.items;
    const active = this.state.active;

    return slides.map((slide, index) => (
      <a onClick={() => this.setActive(index)} key={index} className={classNames({ active: active === index })}>
        <li key={index} className={classNames("LessonSlide__navDot", { active: active === index })}></li>
      </a>
    ));
  }

  setActive(selected) {
    const direction = selected > this.state.active ? "right" : "left";

    this.setState({
      active: selected,
      direction: direction,
    });
  }

  moveLeft() {
    const newActive = this.state.active - 1;

    if (this.state.active + 1 === 1) {
      return;
    }

    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: "left",
    });
  }

  moveRight() {
    const newActive = this.state.active;

    if (this.state.active + 1 === this.state.items.length) {
      return;
    }

    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: "right",
    });
  }

  render() {
    const items = this.state.items;

    if (!items || items.length === 0) {
      return null;
    }

    return (
      <div className="LessonSlider">
        <h3 className="SliderItem__title">畫廊</h3>
        <div className="LessonSlider__container noselect">
          {this.state.active + 1 !== 1 && <button className="LessonSlider__button LessonSlider__button--prev" onClick={this.leftClick} />}
          {this.state.items.map((item, index) => this.renderSlides(item, index))}
          {this.state.active + 1 !== this.state.items.length && <div className="LessonSlider__button LessonSlider__button--next" onClick={this.rightClick} />}
        </div>

        <ul className={`LessonSlider__nav noselect ${this.props.colourScheme}`}>{this.renderSliderNav()}</ul>
      </div>
    );
  }
}

export default LessonSlide;
