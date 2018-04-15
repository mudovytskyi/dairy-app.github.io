import  React, { Component } from 'react';
import PropTypes, { number } from 'prop-types';
import TaskRecord from './TaskRecord';
import {animateScroll} from 'react-scroll';
import $ from 'jquery';

class TaskList extends Component {

    updateScroll = () => {
        animateScroll.scrollToBottom({containerId: 'container'});
    }

    

    render () {
        console.log(this.props.items);
        return (
            <nav> 
            <div className="indicator"/>
            <ul id='container' className="TaskList">{
                Object.keys(this.props.items).map(taskID =>
                        {   
                            let task = this.props.items[taskID];
                            console.log('in record', taskID, task);
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