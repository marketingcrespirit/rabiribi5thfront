import React, { Component } from "react";

class Note extends Component {
  // Setting up little functions
  state = {
    editing: false,
  };

  componentWillMount = () => {
    this.style = {
      right: this.randomBetween(0, window.innerWidth - 150) + "px",
      top: this.randomBetween(0, window.innerHeight - 300) + "px",
      transform: "rotate(" + this.randomBetween(-15, 15) + "deg)",
    };
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
        <p>{this.props.name}:</p>
        <p>{this.props.content}</p>
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
      <div className="board">
        {this.state.notes.map(this.eachNote)}
        <button className="btn btn-sm btn-success glyphicon glyphicon-plus" onClick={this.show}>
          +
        </button>
      </div>
    );
  }
}

//Below we render the objects
export default Board;
