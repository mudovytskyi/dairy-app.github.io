import  React, { Component } from 'react';
import CommentRecord from './CommentRecord';

class CommentList extends Component {
    render () {
        console.log(this.props.items)
        return (
            <div className="TaskList">{
                
                Object.keys(this.props.items).map(commentID =>
                   
                        <CommentRecord 
                        key = {commentID}
                       value={this.props.items[commentID]}
                        />
                   
                )
            }
            </div>
        );
    }
}
export default CommentList;