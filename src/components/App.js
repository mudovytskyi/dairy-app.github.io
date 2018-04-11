import React, { Component } from 'react';
import DairyCover from './DairyCover';
import DairyContent from './DairyContent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DairyCover />
        <DairyContent />
      </div>
    );
  }
}

export default App;
