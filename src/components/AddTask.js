import React, {Component} from 'react';
import TaskList from './TaskList';

class AddTask extends Component {
    constructor(props){
        super(props)
        this.state = {
            showTaskList:false,
            name: '',
        }
    }

    linkList = () => {
        this.props.closeForm();
    }

    handleAddTask = () => {
        this.props.addTask(this.state.name)
        this.linkList()
    }

    isChangedName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render(){
        if(this.state.showTaskList == true){
            return (
                <TaskList/>
            )
        } else {
            return (
                <React.Fragment>
                    <div className="container">
                        <h2>Add New Task</h2>
                        <div>
                            <label>Name</label>
                            <input type = "text" className = "form-control" placeholder = "Enter name of task" onChange = {this.isChangedName} />
                        </div>

                        <button type = "submit" style = {{marginRight: 5 + 'px'}} className = "" onClick = {this.handleAddTask} value = "">Add</button>
                        <button type = "button" className = "" onClick = {this.linkList} value = "">Back</button>
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default AddTask;