import React, { Component } from 'react';
export default class Draggable extends Component {
  onDragStart(ev) {
    this.props.onDragStart && this.props.onDragStart(ev);
    ev.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.setData("draggable", JSON.stringify(this.props));
    return true;
  }
  onDragEnd(ev) {
    this.props.onDragEnd && this.props.onDragEnd(ev);
    ev.dataTransfer.clearData("draggable");
    return false
  }
  render() {
    return <div 
      className="draggable" 
      draggable="true" 
      onDragStart={(e)=>this.onDragStart(e)}
      onDragEnd={(e)=>this.onDragEnd(e)}
    />;
  }
}