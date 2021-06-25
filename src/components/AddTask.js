import React, {Component} from 'react';
import TaskList from './TaskList';

class AddTask extends Component {
    constructor(props){
        super(props)
        this.state = {
            showTaskList:false,
            object: '',
        }
    }

    //close form
    linkList = () => {
        this.props.closeForm();
    }

    //thuc hien viec luu task
    handleAddTask = () => {
        this.props.addTask(this.state.object)
        this.linkList()
    }

    //Thay doi noi dung cua text thi se xet lai noi dung task se luu
    isChangedName = (e) => {
        this.setState({
            object: {id: this.props.idMax+1,text: e.target.value,checked: "false"}
        })
    }

    render(){
        if(this.state.showTaskList === true){
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
                            <input type = "text" placeholder = "Enter name of task" onChange = {this.isChangedName} />
                        </div>

                        <button type = "submit" onClick = {this.handleAddTask} value = "">Add</button>
                        <button type = "button" onClick = {this.linkList} value = "">Back</button>
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default AddTask;