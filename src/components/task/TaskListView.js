import  React, { Component } from 'react';
import AddTaskBar from './AddTaskBar';
import TaskList from './TaskList';
import $ from 'jquery';
class TaskListView extends Component {
    addTask = (newTaskName) => {
        console.log(newTaskName)
        // $("li:last").scrollntToView();
        // api;
        // api.addName(newName, contestId).then(resp =>
        //     this.setState({
        //         contests: {
        //             ...this.state.contests,
        //             [resp.updatedContest._id]: resp.updatedContest
        //         },
        //         names: {
        //             ...this.state.names,
        //             [resp.newName._id]: resp.newName
        //         }
        //     })
        // )
        // .catch(error => {
        //     this.currentContest().description = 'Error';
        // });
    };

    render () {
        console.log(this.props.tasks)
        return (
            <div className="TaskListView">
            <p className="App-title">Items</p>
            <AddTaskBar addTask={this.addTask}/>
            <TaskList items={this.props.tasks}/>
             </div>
        );
    }
}
export default TaskListView;