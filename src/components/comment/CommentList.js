import  React, { Component } from 'react';
import CommentRecord from './CommentRecord';

class CommentList extends Component {
    render () {
        // console.log(this.props.items)
        if(this.props.items) {
            return (
                    <div className="CommentList">{
                            Object.keys(this.props.items).map(commentID =>
                                
                                <CommentRecord 
                                key = {commentID}
                                value={this.props.items[commentID]}
                                />
                                
                            )
                        }
                    </div>
                );
        } else {
            return (
                <div className="CommentList"/>
            );
        }
    }
}
export default CommentList;