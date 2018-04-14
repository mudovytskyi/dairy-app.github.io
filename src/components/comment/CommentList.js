import  React, { Component } from 'react';
import CommentRecord from './CommentRecord';
import {animateScroll} from 'react-scroll';

class CommentList extends Component {

    componentDidUpdate () {
        animateScroll.scrollToBottom({containerId: 'container'});
    }
    
    render () {
        if(this.props.items) {
            return (
                <nav>
                    <ul id="container" className="CommentList">{
                            Object.keys(this.props.items).map(commentID =>
                                
                                <CommentRecord 
                                key = {commentID}
                                value={this.props.items[commentID]}
                                />
                                
                            )
                        }
                    </ul>
                </nav>
                );
        } else {
            return (
                <div className="CommentList"/>
            );
        }
    }
}
export default CommentList;