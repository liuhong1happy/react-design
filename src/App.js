import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import VerticalLayout from './Core/Layout/HorizontalLayout';
import Draggable from './Core/Component/Draggable';


/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="right">
          <Draggable type="div" props={{className:"draggable",draggable: true, style:{width: 200, height: 20, lineHeight: 20}}} />
        </div>
        <div className="left">
          <VerticalLayout />
        </div>
      </div>
    );
  }
}*/

class App extends Component {
  render() {
    return (<div className="App">
      <div className="header">
        <div className="inline-style float-left">
          <img src={logo} width={64} height={64} />
        </div>
        <div className="inline-style float-left web-title">Logo</div>
        <div className="inline-style float-right header-button">
          <span className="button secondary-button">导出</span>
        </div>
        <div className="inline-style float-right header-button">
          <span className="button primary-button">保存</span>
        </div>
      </div>
    </div>)
  }
}

export default App;
