import React, { Component } from 'react';
import './App.css';
import VerticalLayout from './Core/Layout/HorizontalLayout';
import Draggable from './Core/Component/Draggable';
import Header from './Core/Containers/Header';

class App extends Component {
  render() {
    return (<div className="App">
      <Header />
    </div>)
  }
}

export default App;
