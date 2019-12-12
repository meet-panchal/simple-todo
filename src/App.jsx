import React, { Component } from "react";
import AddForm from "./form/AddForm";
import EditForm from "./form/EditForm";
import TaskTable from "./table/TaskTable";
const uuidv4 = require("uuid/v4");

class App extends Component {
  state = {
    todoArray: [],
    isEditing: false,
    currentUser: []
  };

  addUser = user => {
    user.id = uuidv4();
    this.setState({
      todoArray: [...this.state.todoArray, user]
    });
  };

  deleteHandler = id => {
    this.setState({
      todoArray: this.state.todoArray.filter(task => task.id !== id),
      isEditing: false
    });
  };

  editHandler = task => {
    console.log(task);
    this.setState({
      isEditing: true,
      currentUser: {
        id: task.id,
        title: task.title,
        description: task.description
      }
    });
  };

  cancelHandler = () => {
    this.setState({
      isEditing: false
    });
  };

  updateUser = (id, taskInfo) => [
    this.setState({
      isEditing: false,
      todoArray: this.state.todoArray.map(tasks =>
        tasks.id === id ? taskInfo : tasks
      )
    })
  ];

  render() {
    return (
      <div className="container">
        <h1>CRUD Operations in React</h1>
        <div className="d-flex justify-content-between mt-4">
          <div>
            {this.state.isEditing ? (
              <EditForm
                editdata={this.state.currentUser}
                cancelHandler={this.cancelHandler}
                updateUser={this.updateUser}
              />
            ) : (
              <AddForm addUser={this.addUser} />
            )}
          </div>
          <div>
            <h2>View Task</h2>
            <TaskTable
              data={this.state.todoArray}
              deleteUser={this.deleteHandler}
              editUser={this.editHandler}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
