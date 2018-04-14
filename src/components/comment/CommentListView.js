import  React, { Component } from 'react';
import CommentList from './CommentList';
import AddCommentBar from './AddCommentBar';

class CommentListView extends Component {
    componentDidUpdate() {
        console.log(this.props.comments, this.props.taskIndex, this.props.task);
    }
    render () {
        return (
            <div className="CommentListView">
            <p className="App-title">Comments #{this.props.taskIndex > -1 ? this.props.taskIndex + 1 : ""}</p>
            <CommentList items={this.props.comments}/>
            <AddCommentBar addComment={this.props.onAdd}/>
             </div>
        );
    }
}
export default CommentListView;