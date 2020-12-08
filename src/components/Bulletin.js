import React, { Component } from "react";
import styles from "./bulletin.module.css";

class Note extends Component {
  // Setting up little functions
  state = {
    editing: false,
  };

  componentWillMount = () => {
    const obj = this.getPosition(window.innerHeight - 150, window.innerWidth - 150);
    // this.style = {
    //   right: this.randomBetweenWithRange(0, window.innerWidth - 150) + "px",
    //   top: this.randomBetweenWithRange(0, window.innerHeight - 300) + "px",
    //   transform: "rotate(" + this.randomBetween(-15, 15) + "deg)",
    // };
    this.style = {
      right: obj.xp + "px",
      top: obj.yp + "px",
      transform: "rotate(" + this.randomBetween(-20, 40) + "deg)",
    };
  };

  getPosition = (height, width) => {
    let output = { xp: "", yp: "" };
    output.xp = this.randomBetween(0, width);
    output.yp = this.randomBetween(0, height);
    while (output.xp > width * 0.2 && output.xp < width * 0.8 && output.yp > height * 0.15 && output.yp < height * 0.85) {
      output.xp = this.randomBetween(0, width);
      output.yp = this.randomBetween(0, height);
    }
    return output;
  };

  randomBetween = (min, max) => {
    return min + Math.ceil(Math.random() * max);
  };

  edit = () => {
    this.setState({ editing: true });
  };
  save = () => {
    this.props.onChange(this.refs.newText.getDOMNode().value, this.props.index);
    this.setState({ editing: false });
  };
  remove = () => {
    this.props.onRemove(this.props.index);
  };
  // rendering Display
  renderDisplay = () => {
    return (
      <div className="note" style={this.style}>
        <div className="noteTxt">
          <p>{this.props.name}:</p>
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  };
  //rendering Form display
  renderForm = () => {
    return (
      <div className="note" style={this.style}>
        <textarea ref="newText" defaultValue={this.props.children} className="form-control"></textarea>
        <button onClick={this.save} className="btn btn-success btn-sm glyphicon glyphicon-floppy-disk" />
      </div>
    );
  };
  // render at the end of react class to decide which render view to show
  render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
}

class Board extends Component {
  state = {
    count: this.props.data.length,
    notes: [],
  };

  nextId = () => {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  };

  show = () => {
    // setInterval(() => {
    //   if (this.state.count < 5) {
    //     this.add(this.props.data[Math.floor(Math.random() * this.props.data.length)]);
    //     let newCount = this.state.count;
    //     newCount++;
    //     this.setState({ count: newCount });
    //   } else if (this.state.count === 5) {
    //     this.setState({ notes: [] });
    //     this.setState({ count: 0 });
    //   }
    // }, 300);

    setInterval(() => {
      if (this.state.count < this.props.data.length) {
        this.add(this.props.data[this.state.count]);
        let newCount = this.state.count;
        newCount++;
        this.setState({ count: newCount });
      }
    }, 300);
  };

  add = (text) => {
    var arr = this.state.notes;
    arr.push({
      id: this.nextId(),
      note: text,
    });
    this.setState({ notes: arr });
  };

  update = (newText, i) => {
    var arr = this.state.notes;
    arr[i].note = newText;
    this.setState({ notes: arr });
  };

  remove = (i) => {
    var arr = this.state.notes;
    arr.splice(i, 1);
    this.setState({ notes: arr });
  };

  eachNote = (note, i) => {
    return (
      <Note name={note.note.name} content={note.note.content} key={note.id} index={i} onChange={this.update} onRemove={this.remove}>
        {note.note}
      </Note>
    );
  };
  render() {
    return (
      <div className={styles.board}>
        {this.state.notes.map(this.eachNote)}
        <div className={styles.centerWrapper}>
          <div className={styles.innerWrapper}>
            <h1 className="bigHeader cursor" onClick={this.show}>點我看留言</h1>
          </div>
        </div>
      </div>
    );
  }
}



// 1000 (1/7) 3000(1/10)  5000 (1/13)

//Below we render the objects
export default Board;
