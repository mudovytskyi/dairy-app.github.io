import  React, { Component } from 'react';
import CommentIcon from './CommentIcon';


class AddCommentBar extends Component {

    handleKeyPress = (event) => {
        event.preventDefault();
        
        if (event.ctrlKey && event.keyCode == 13) {
            let newCommentValue = this.refs.newCommentTA.value;
            if (newCommentValue) {
                this.props.addComment(newCommentValue);
                this.refs.newCommentTA.value = '';
            }
        }
    }

    render () {
        return (
            <div className="AddCommentBar">
                        <CommentIcon />
            <div className="comment-new" onKeyPress={this.handleKeyPress}>
                <textarea ref="newCommentTA" />
            </div>
            </div>
           
        );
    }
}

export default AddCommentBar;