import React, {Component} from 'react';
import '../css/Todolist.css';

class ButtonBottom extends Component {
    render(){
        return (
            <React.Fragment>
                <text className = "text">2 item left</text>
                <button className = "button" type="button" onClick={this.setStatus}>Completed</button>
                <button className = "button" type="button" onClick={this.setStatus}>Doing</button>
                <button className = "button" type="button" onClick={this.setStatus}>All</button>
            </React.Fragment>
        )
    }
}

export default ButtonBottom;