import React, {Component} from 'react';
import TaskList from './TaskList';

class Task extends Component {

    sendDeleteTask = () => {
        this.props.deleteTask(this.props.index)
    }

    render(){
        return <tr>
            <td>
                <div>
                <input type = 'checkbox' id = {this.props.index}/>
                {this.props.name}
                <button type="submit" id = {this.props.index} onClick = {this.sendDeleteTask}>Delete</button>
                </div>
            </td>
        </tr>
    }
}

export default Task;