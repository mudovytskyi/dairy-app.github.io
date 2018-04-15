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
      tasks: this.props.tasks || [],
      currentTaskID: this.props.currentTaskID || -1,
      lastTaskID: this.props.lastTaskID || 0,
    };

    this.getComments = this.getComments.bind(this);
    this.getIndex = this.getIndex.bind(this);
  }
  
  componentWillUpdate() {
    console.log('will')
    console.log(this.state)
  }

  componentDidUpdate() {
    console.log('did')
    console.log(this.state)
    this.props.onUpdate(this.state);
  }

  fetchTask = (taskID) => {
    // console.log(this.state.tasks, this.state.tasks.length)
    if (this.state.tasks.length) {
      return  this.state.tasks.find( task => {
        return task._id === taskID;
      }) || {};
    }
    return {};
  };

  addNewTaskHandler = (newTaskName) => {
    let newTask = { _id: this.state.lastTaskID + 1,
                name: newTaskName,
                comments: [],
              };
    this.setState({
      currentTaskID: newTask._id,
      tasks: [...this.state.tasks, newTask],
      lastTaskID: newTask._id,
    });

    //CALL STORAGE
    // this.shouldComponentUpdate()
    // this.props.onUpdate(this.getStorageDataObj());
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
    // this.props.onUpdate(this.getStorageDataObj());
  }


  addNewCommentHandler = (newComment) => {
    // let taskToUpdate = Object.assign({}, this.state.currentTask);
    let currentTask = this.fetchTask(this.state.currentTaskID)
    let taskToUpdate = Object.assign({}, currentTask);
    let index = this.state.tasks.indexOf(currentTask);
    taskToUpdate.comments.push(newComment);

    let updatedTaskList = this.state.tasks.slice();
    updatedTaskList.splice(index, 1, taskToUpdate);
    
    this.setState({
      // currentTask: taskToUpdate,
      tasks: updatedTaskList,
    })

    //CALL STORAGE
    // console.log(this.state)
    // this.props.onUpdate(this.state);
  }

  selectTaskHandler = (taskID) => {
    this.setState({
      // currentTask: this.fetchTask(taskID),
      currentTaskID: taskID,
    })
  }

  getComments = () => {
    console.log(this.state.currentTaskID, this.props.currentTaskID)
    let task = this.fetchTask(this.state.currentTaskID);
    console.log('fromcoms', task, task.hasOwnProperty('comments'))
    return 
      task.hasOwnProperty('comments') 
        ? task.comments || [] : [];
  }

  getIndex = () => {
    return
      this.state.tasks.indexOf(this.fetchTask(this.state.currentTaskID));
  }

  // getStorageDataObj = () => {
    // console
    // return {
    //     "currentTaskID": this.state.currentTaskID,
    //     "lastTaskID": this.state.lastTaskID,
    //     "tasks" : this.state.tasks,
    // };
    // return this.state;
  // }

  /*  <div className="App">
        <DairyCover />
        <DairyContent 
        currentTaskID = {this.state.currentTaskID}
        tasks={this.state.tasks}
        comments={this.state.currentTask.comments}/>
      </div>
       */
  render() {
    console.log('app', this.state.tasks)
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
             <CommentListView 
                comments={this.fetchTask(this.state.currentTaskID).comments || []}
                onAdd={this.addNewCommentHandler}
                taskIndex={this.state.tasks.indexOf(this.fetchTask(this.state.currentTaskID))}/>
        </div>
      </div>
    );
  }
}

export default App;
