import React, { Component } from 'react';
export default class VerticalLayout extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      children: []
    }
  }
  
  onDragOver(ev) {
    this.props.onDragOver && this.props.onDragOver(ev);
    ev.preventDefault();
    return false;
  }
  onDragEnter(ev) {
    this.refs["container"].style.border = "2px dotted black";
    return false;
  }
  onDragLeave(ev) {
    this.refs["container"].style.border = "1px dotted #ddd";
    return false;
  }
  onDrop(ev) {
    // 放入容器
    this.refs["container"].style.border = "1px dotted #ddd";
    const draggable = ev.dataTransfer.getData('draggable');
    if(!draggable) return;
    const child = JSON.parse(draggable);
    child.props.style.width = 20;
    child.props.style.height = "100%";
    child.props.key = new Date().valueOf() + "+"+ Math.round()
    const children = this.state.children;
    children.push(React.createElement(child.type, child.props, null));
    this.setState({
        children
    })
    return false;
  }
  render() {
    return <div
      ref="container"
      className="container"
      onDragOver={(e)=>this.onDragOver(e)}
      onDragEnter={(e)=>this.onDragEnter(e)}
      onDragLeave={(e)=>this.onDragLeave(e)}
      onDrop={(e)=>this.onDrop(e)}
    >
    {this.state.children}
    </div>;
  }
}