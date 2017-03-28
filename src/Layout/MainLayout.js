import React, { Component } from 'react';
export default class MainLayout extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      child: null
    }
  }
  
  onDragOver(ev) {
    this.props.onDragOver && this.props.onDragOver(ev);
    ev.preventDefault();
    return !!this.state.child;
  }
  onDragEnter(ev) {
    if(!this.state.child) {
      this.refs["container"].style.border = "2px dotted black";
    }
    return !!this.state.child;
  }
  onDragLeave(ev) {
    if(!this.state.child) {
      this.refs["container"].style.border = "1px dotted #ddd";
    } else {
      // 移除容器则消失
      this.setState({
        child: null
      })
    }
    return !!this.state.child;
  }
  onDrop(ev) {
    if(!this.state.child) {
      // 放入容器
      this.refs["container"].style.border = "1px dotted #ddd";
      const draggable = ev.dataTransfer.getData('draggable');
      if(!draggable) return;
      const child = JSON.parse(draggable);
      child.props.width = "100%";
      child.props.height = "100%";
      this.setState({
        child: React.createElement(child.type, child.props, null)
      })
    }
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
    {this.state.child}
    </div>;
  }
}