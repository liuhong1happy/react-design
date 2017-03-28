import React, { Component } from 'react';
import './App.css';
import VerticalLayout from './Layout/HorizontalLayout';
import Draggable from './Component/Draggable';

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
}

export default App;
