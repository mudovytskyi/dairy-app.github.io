import  React, { Component } from 'react';
import PropTypes, { number } from 'prop-types';
import TaskRecord from './TaskRecord';

class TaskList extends Component {
    render () {
        return (
            <nav> 
            <ul className="TaskList">{
                Object.keys(this.props.items).map(taskID =>
                   
                        <TaskRecord 
                        key = {taskID}
                        tabindex  = {taskID}
                        {...this.props.items[taskID]}
                        onClick={(id)=>{console.log(id)}} />
                   
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