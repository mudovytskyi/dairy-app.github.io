import  React, { Component } from 'react';
import AddTaskBar from './AddTaskBar';
import TaskList from './TaskList';

class TaskListView extends Component {
   
    render () {
        return (
            <div className="TaskListView">
            <p className="App-title">Items</p>
            <AddTaskBar addTask={this.props.onAdd}/>
            <TaskList items={this.props.tasks} 
            onSelect={this.props.onSelect}
            selectedTask={this.props.taskID} 
            onDelete={this.props.onDelete}/>
             </div>
        );
    }
}
export default TaskListView;