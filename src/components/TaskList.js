import React, { Component } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import ButtonBottom from "./ButtonBottom";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasksObject: [
        ],
      showAddForm: false,
      tasksObjectShow: [

      ]
    };
  }

  setStatus = () => {
    this.setState({
      showAddForm: true,
    });
  };

  closeForm = () => {
    this.setState({
      showAddForm: false,
    });
  };

  addTask = (object) => {
    this.state.tasksObject.push(object);
    this.forceUpdate();
    this.setState({
      tasksObjectShow: this.state.tasksObject
    });
  };

  deleteTask = (id) => {
    const tasksRest = this.state.tasksObject.filter((object) => {
      return object.id !== id;
    })
    this.setState({
      tasksObject: tasksRest,
    })
    
  }

  completed = () => {
    const tasksShow = this.state.tasksObject.filter((object) => {
      return object.checked === "true";
    })
    this.setState({
      tasksObjectShow: tasksShow,
    })
  }

  doing = () => {
    const tasksShow = this.state.tasksObject.filter((object) => {
      return object.checked === "false";
    })
    this.setState({
      tasksObjectShow: tasksShow,
    })
  }


  
  all = () => {
    this.setState({
      tasksObjectShow: this.state.tasksObject
    })

    console.log("doing")
    console.log(this.state.tasksObjectShow)
  }

  clickCheckbox = (id) => {

    const tasksObjectAfterChange = this.state.tasksObject.map(
      function (object, index) {
        if(object.id === id){
          //neu checkbox da duoc checked thi cho khong check, neu chua checked thi checked
          if(object.checked === "true"){
            object.checked = "false"
          } else {
            object.checked = "true"
          }
        }
        return object;

      }.bind(this))
    
    this.setState({
      tasksObject: tasksObjectAfterChange
    });
    console.log(this.state.tasksObject)
  }

  render() {
    if (this.state.showAddForm === true) {
      return <AddTask 
                addTask={this.addTask} 
                closeForm={this.closeForm} 
                idMax = {this.state.tasksObject.length}
              />;
    } else {
      return (
        <div>
          <button type="button" onClick={this.setStatus}>Add Task</button>
          <h2>List Task</h2>
          <table>
            <thead>
              <tr>
                <th>Name of task</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasksObjectShow.map(
                function (object, index) {
                  return <Task
                          idSend={object.id}
                          textSend={object.text} 
                          checkedSend={object.checked}
                          deleteTask = {this.deleteTask} 
                          clickCheckbox = {this.clickCheckbox}
                          />;
                }.bind(this)
              )}
            </tbody>
          </table>
          <ButtonBottom 
                  countTask = {this.state.tasksObjectShow.length}
                  completed = {this.completed}
                  doing = {this.doing}
                  all = {this.all}
              />
        </div>
      );
    }
  }
}

export default TaskList;
