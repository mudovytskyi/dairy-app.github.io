import  React, { Component } from 'react';
import CommentIcon from './CommentIcon';
/* <div className="CommentRecord">
            <CommentIcon />
            <div className="comment-name">
                <span>{this.props.value}</span>
            </div>
        </div> */
class CommentRecord extends Component {
    render () {
        return (
            <div className="CommentRecord">
                <CommentIcon />
                <div className="comment-name">
                    <span>{this.props.value}</span>
                </div>
            </div>
        );
    }
}
export default CommentRecord;