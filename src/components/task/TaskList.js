import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskRecord from './TaskRecord';
import {animateScroll} from 'react-scroll';
import $ from 'jquery';

class TaskList extends Component {

    updateScroll = () => {
        animateScroll.scrollToBottom({containerId: 'container'});
    }

    render () {
        return (
            <nav> 
            <ul id='container' className="TaskList"> {
                Object.keys(this.props.items).map(taskID =>
                        {   
                            let task = this.props.items[taskID];
                            let record = (task._id === this.props.selectedTaskID) 
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
    selectedTaskID: PropTypes.number.isRequired,
    items: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default TaskList;