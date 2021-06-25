import React, {Component} from 'react';

class ButtonBottom extends Component {

    completed = () => {
        this.props.completed()
    }
    
    doing = () => {
        this.props.doing()
    }

    all = () => {
        this.props.all()
    }


    render(){
        return (
            <React.Fragment>
                {this.props.countTask} item left
                <button className = "button" type="button" onClick={this.completed}>Completed</button>
                <button className = "button" type="button" onClick={this.doing}>Doing</button>
                <button className = "button" type="button" onClick={this.all}>All</button>
            </React.Fragment>
        )
    }
}

export default ButtonBottom;