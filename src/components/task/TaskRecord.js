import  React, { Component } from 'react';


class TaskRecord extends Component {

    handleClick = () => {
        this.props.onClick(this.props._id)
     };

    render () {
        return (
            <div className="TaskRecord">
                <div className="task-name">
                    <span>{this.props.name}</span>
                </div>
                <div className="num-comments">
                    <input type="button" value={this.props.comments.length}/>
                </div>
                <div className="delete-btn" onClick={this.handleClick}>
                    <input type="button" value="Delete"/>
                </div>
            </div>
        );
    }
}
export default TaskRecord;