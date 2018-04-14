import React, { Component } from 'react';
import DairyCover from './DairyCover';
import DairyContent from './DairyContent';
import './App.css';
import TaskListView from './task/TaskListView';
import CommentListView from './comment/CommentListView';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      tasks: this.props.tasks,
      currentTaskID: this.props.currentTaskID,
      lastTaskID: this.props.lastTaskID,
    };
  }
  
  fetchTask = (taskID) => {
     return  this.state.tasks.find( task => {
        return task._id === taskID;
      }) || {};
  };

  addNewTaskHandler = (newTaskName) => {
    let newTask = { _id: this.state.lastTaskID + 1,
                name: newTaskName,
                comments: [],
              };
    this.setState({
      // currentTask: newTask,
      currentTaskID: newTask._id,
      tasks: [...this.state.tasks, newTask],
      lastTaskID: newTask._id,
    });

    //CALL STORAGE
  }

  deleteTaskHandler = (taskID) => {
    let taskToDelete = this.fetchTask(taskID);
    let index = this.state.tasks.indexOf(taskToDelete);
    let updatedTaskList = this.state.tasks.slice();
    updatedTaskList.splice(index, 1);
    
    this.setState({
      tasks: updatedTaskList,
      currentTaskID: ((taskToDelete._id === this.state.currentTaskID) 
                          ? -1
                          : this.state.currentTaskID),
    })

    //CALL STORAGE
  }


  addNewCommentHandler = (newComment) => {
    let taskToUpdate = Object.assign({}, this.state.currentTask);
    let index = this.state.tasks.indexOf(this.state.currentTask);
    taskToUpdate.comments.push(newComment);

    let updatedTaskList = this.state.tasks.slice();
    updatedTaskList.splice(index, 1, taskToUpdate);
    
    this.setState({
      currentTask: taskToUpdate,
      tasks: updatedTaskList,
    })

    //CALL STORAGE
  }

  selectTaskHandler = (taskID) => {
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
             Comment with no sense
          </div>
        </div>
       
        <div className="DairyContent">
             <TaskListView tasks={this.state.tasks}
               taskID={this.state.currentTaskID} 
               onAdd={this.addNewTaskHandler}
               onDelete={this.deleteTaskHandler}
               onSelect={this.selectTaskHandler}/>
             <CommentListView comments={this.fetchTask(this.state.currentTaskID).comments}
                onAdd={this.addNewCommentHandler}
                task={this.fetchTask(this.state.currentTaskID)}
                taskIndex={this.state.tasks.indexOf(this.state.currentTask)}/>
        </div>
      </div>
    );
  }
}

export default App;
