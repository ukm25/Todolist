import React, {Component} from 'react';

class Task extends Component {

    deleteTask = () => {
        this.props.deleteTask(this.props.idSend)
    }

    clickCheckbox = () => {
        this.props.clickCheckbox(this.props.idSend)
    }

    render(){
        if(this.props.checkedSend === 'true'){
            return ( 
                <tr>
                    <td>
                        <>
                            <input type = 'checkbox' checked = 'checked' id = {this.props.idSend} onClick = {this.clickCheckbox}/>
                            {this.props.textSend}
                            <button type="button" id = {this.props.idSend} onClick = {this.deleteTask}>Delete</button>
                        </>
                    </td>
                </tr>
            )
        } else {
            return (
                <tr>
                    <td>
                        <>
                            <input type = 'checkbox' id = {this.props.idSend} onClick = {this.clickCheckbox}/>
                            {this.props.textSend}
                            <button type="button" id = {this.props.idSend} onClick = {this.deleteTask}>Delete</button>
                        </>
                    </td>
                </tr>
                )
            }
    }
}

export default Task;