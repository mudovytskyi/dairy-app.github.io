import  React, { Component } from 'react';
import AddTaskBar from './AddTaskBar';
import TaskList from './TaskList';

class TaskListView extends Component {
    render () {
        return (
            <div>
            <h1 className="App-title">Items</h1>
            <AddTaskBar />
            <TaskList />
             </div>
        );
    }
}
export default TaskListView;