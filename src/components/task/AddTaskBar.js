import  React, { Component } from 'react';


class AddTaskBar extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        // console.log('test');
        // console.log(this.refs.newNameInput.value);
        // read the value that the user types
        let newTaskValue = this.refs.newTaskInput.value;
        if (newTaskValue) {
            this.props.addTask(newTaskValue);
            this.refs.newTaskInput.value = '';
        }
    }
    render () {
        return (
            <div className="AddTaskBar">
            <form onSubmit={this.handleSubmit}> 
                <input type="text" 
                    ref="newTaskInput"
                    placeholder="Type name here..." />
                <input type="submit" value="Add new"/>
            </form>
            </div>
        );
    }
}
export default AddTaskBar;