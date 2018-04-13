import  React, { Component } from 'react';


class AddTaskBar extends Component {
    
    addTask = (value) => {
        this.props.addTask(value);
        this.refs.newTaskInput.value = '';
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log('test');
        // console.log(this.refs.newNameInput.value);
        // read the value that the user types
        let newTaskValue = this.refs.newTaskInput.value;
        if (newTaskValue) {
            this.addTask(newTaskValue);
        }
    }
    handleKeyPress = (event) => {
        // event.preventDefault();

        let newTaskValue = this.refs.newTaskInput.value;
        console.log(event)
        if (newTaskValue && event.keyCode == 13) {
           this.addTask(newTaskValue);
        }
    }
    /* <div className="AddTaskBar">
            <form onSubmit={this.handleSubmit}> 
                <input type="text" 
                    ref="newTaskInput"
                    placeholder="Type name here..." />
                <input type="submit" value="Add new"/>
            </form>
            </div> */
    render () {
        return (
            <div className="AddTaskBar">
            
                <input type="text"
                    onKeyPress={this.handleKeyPress}
                    ref="newTaskInput"
                    placeholder="Type name here..." />
                <input type="submit" value="Add new" onClick={this.handleSubmit}/>
            
            </div>
        );
    }
}
export default AddTaskBar;