import  React, { Component } from 'react';
import CommentList from './CommentList';
import AddCommentBar from './AddCommentBar';
import $ from 'jquery';
// window.jQuery = window.$ = $;

class CommentListView extends Component {
    addComment = (newComment) => {
        $("li:last").scrollntToView();
        // api;
        // api.addName(newName, contestId).then(resp =>
        //     this.setState({
        //         contests: {
        //             ...this.state.contests,
        //             [resp.updatedContest._id]: resp.updatedContest
        //         },
        //         names: {
        //             ...this.state.names,
        //             [resp.newName._id]: resp.newName
        //         }
        //     })
        // )
        // .catch(error => {
        //     this.currentContest().description = 'Error';
        // });
    };

    render () {
        return (
            <div className="CommentListView">
            <p className="App-title">Comments #{this.props.taskID > -1 ? this.props.taskID : ""}</p>
            <CommentList items={this.props.comments}/>
            <AddCommentBar addComment={this.addComment}/>
             </div>
        );
    }
}
export default CommentListView;