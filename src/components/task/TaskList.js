import  React, { Component } from 'react';
import PropTypes, { number } from 'prop-types';
import TaskRecord from './TaskRecord';

class TaskList extends Component {
    render () {
        return (
            <div className="TaskList">{
                
                Object.keys(this.props.items).map(taskID =>
                   
                        <TaskRecord 
                        key = {taskID}
                        {...this.props.items[taskID]}
                        onClick={(id)=>{console.log(id)}} />
                   
                )
            }
            
            </div>
        );
    }
}

TaskList.propTypes = {
};

export default TaskList;