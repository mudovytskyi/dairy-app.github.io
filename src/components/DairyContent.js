import  React, { Component } from 'react';
import TaskListView from './task/TaskListView';
import CommentListView from './comment/CommentListView';

class DairyContent extends Component {
    render () {
        return (
            <div>
             <p> Content </p>
             <TaskListView />
             <CommentListView />
             </div>
        );
    }
}
export default DairyContent;