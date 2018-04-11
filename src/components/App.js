import React, { Component } from 'react';
import DairyCover from './DairyCover';
import DairyContent from './DairyContent';
import './App.css';
// import $ from 'jquery';
// window.jQuery = window.$ = $;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tasks: this.props.tasks,
      currentTaskID: this.props.currentTaskID,
      currentTask: this.fetchTask(),
    };
  }
  
  fetchTask = () => {
    return  this.props.tasks.find( task => {
        return task._id === this.props.currentTaskID;
      }) || {};
  };

  render() {
    return (
      <div className="App">
        <DairyCover />
        <DairyContent 
        currentTaskID = {this.state.currentTaskID}
        tasks={this.state.tasks}
        comments={this.state.currentTask.comments}/>
      </div>
    );
  }
}

export default App;
