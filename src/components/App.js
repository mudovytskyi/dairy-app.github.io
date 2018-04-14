import React, { Component } from 'react';
import DairyCover from './DairyCover';
import DairyContent from './DairyContent';
import './App.css';
import TaskListView from './task/TaskListView';
import CommentListView from './comment/CommentListView';
// import $ from 'jquery';
// window.jQuery = window.$ = $;

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      tasks: this.props.tasks,
      currentTaskID: this.props.currentTaskID,
      currentTask: this.fetchTask(this.props.currentTaskID),
      lastTaskID: this.props.lastTaskID,
    };
  }
  
  fetchTask = (taskID) => {
     return  this.props.tasks.find( task => {
        return task._id === taskID;
      }) || {};
  };

  addNewTaskHandler = (newTaskName) => {
    let newTask = { _id: this.state.lastTaskID + 1,
                name: newTaskName,
                comments: [],
              };
    this.setState({
      currentTask: newTask,
      currentTaskID: newTask._id,
      tasks: [...this.state.tasks, newTask],
      lastTaskID: newTask._id,
    });

    //CALL STORAGE
  }

  deleteTaskHandler = (taskID) => {
    let taskToDelete = this.fetchTask(taskID);
    console.log(taskToDelete)
    let index = this.state.tasks.indexOf(taskToDelete);
    let updatedTaskList = this.state.tasks.slice();
    updatedTaskList.splice(index, 1);
    console.log(index, updatedTaskList)
    this.setState({
      tasks: updatedTaskList,
      currentTask: (taskToDelete === this.state.currentTask)  // remove, leave only currentTaskID
        ? {} // clear styling
        : this.state.currentTask, 
      currentTaskID: (taskToDelete === this.state.currentTask) 
      ? -1
      : this.state.currentTask._id,
    })

    //CALL STORAGE
  }


  addNewCommentHandler = (newComment) => {
    let taskToUpdate = Object.assign({}, this.state.currentTask);
    let index = this.state.tasks.indexOf(this.state.currentTask);
    taskToUpdate.comments.push(newComment);
    this.setState({
      currentTask: taskToUpdate,
      tasks: this.state.tasks.slice().splice(index, 1, taskToUpdate),
    })

    //CALL STORAGE
  }

  selectTask = (taskID) => {
    this.setState({
      currentTask: this.fetchTask(taskID),
      currentTaskID: taskID,
    })
  }

  /*  <div className="App">
        <DairyCover />
        <DairyContent 
        currentTaskID = {this.state.currentTaskID}
        tasks={this.state.tasks}
        comments={this.state.currentTask.comments}/>
      </div>
       */
  render() {
    return (
        <div className="App">
          <div className="DairyCover">
            <div className="App-name">
             dairy app 
          </div>
          <div className="App-slogan">
             with no sense
          </div>
        </div>
       
        <div className="DairyContent">
             <TaskListView tasks={this.state.tasks}
               taskID={this.state.currentTaskID} 
               onAdd={this.addNewTaskHandler}
               onDelete={this.deleteTaskHandler}/>
             <CommentListView comments={this.state.currentTask.comments}
                taskID={this.state.currentTaskID}/>
        </div>
      </div>
    );
  }
}

export default App;
