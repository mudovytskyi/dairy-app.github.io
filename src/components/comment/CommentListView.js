import  React, { Component } from 'react';
import CommentList from './CommentList';
import AddCommentBar from './AddCommentBar';

class CommentListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nComments: 23
        };
    }

    render () {
        return (
            <div>
            <h1 className="App-title">Comments #{this.state.nComments}</h1>
            <CommentList />
            <AddCommentBar />
             </div>
        );
    }
}
export default CommentListView;