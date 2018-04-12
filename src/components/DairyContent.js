import  React, { Component } from 'react';
import TaskListView from './task/TaskListView';
import CommentListView from './comment/CommentListView';

class DairyContent extends Component {
    render () {
        return (
            <div className="DairyContent">
             <TaskListView tasks={this.props.tasks}/>
             <CommentListView comments={this.props.comments}
             taskID={this.props.currentTaskID}/>
             </div>
        );
    }
}
export default DairyContent;