import  React, { Component } from 'react';
import PropTypes, { number } from 'prop-types';
import TaskRecord from './TaskRecord';
import {animateScroll} from 'react-scroll';

class TaskList extends Component {

    componentDidUpdate () {
        animateScroll.scrollToBottom({containerId: 'container'});
    }
    
    render () {
        return (
            <nav> 
            <ul id='container' className="TaskList">{
                Object.keys(this.props.items).map(taskID =>
                        {
                            let task = this.props.items[taskID]
                            let record = (task._id === this.props.selectedTask) 
                                ? <TaskRecord key = {taskID} selected {...task} onClick={this.props.onDelete} 
                                    onSelect={this.props.onSelect} />
                                : <TaskRecord key = {taskID} {...task} onClick={this.props.onDelete} 
                                    onSelect={this.props.onSelect} />;
                            
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