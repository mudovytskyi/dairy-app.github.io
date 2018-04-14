import  React, { Component } from 'react';
import PropTypes, { number } from 'prop-types';
import TaskRecord from './TaskRecord';
import $ from 'jquery';
class TaskList extends Component {
    render () {
        return (
            <nav> 
            <ul className="TaskList">{
                Object.keys(this.props.items).map(taskID =>
                        {
                            let task = this.props.items[taskID]
                            let record = (task._id === this.props.selectedTask) 
                                ? <TaskRecord key = {taskID} selected {...task} onClick={this.props.onDelete} />
                                : <TaskRecord key = {taskID} {...task} onClick={this.props.onDelete} />;
                            
                            return record;
                        }
                   
                )
            }
            
            </ul>
            </nav>
        );
    }
}

TaskList.propTypes = {
    
};

export default TaskList;