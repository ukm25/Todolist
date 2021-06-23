import React, { Component } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import ButtonBottom from "./ButtonBottom";

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ["Task1", "Task2"],
      showAddForm: false,
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
      showEditForm: false,
    });
  };

  addTask = (name) => {
    this.state.tasks.push(name);
    this.forceUpdate();
  };

  deleteTask = (index) => {
    this.state.tasks.splice(index,1);
  }

  render() {
    if (this.state.showAddForm === true) {
      return <AddTask addTask={this.addTask} closeForm={this.closeForm} />;
    } else {
      return (
        <div>
          <button type="button" onClick={this.setStatus}>Add Task</button>
          <h2>List Task</h2>
          <table className="">
            <thead>
              <tr>
                <th>Name of task</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tasks.map(
                function (name, index) {
                  return <Task index={index} name={name} deleteTask = {this.deleteTask}/>;
                }.bind(this)
              )}

              <ButtonBottom/>
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default TaskList;
