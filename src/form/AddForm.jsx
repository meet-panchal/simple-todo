import React, { Component } from "react";
import "./addform.css"

export default class AddForm extends Component {
  state = {
    todoArray : {
      id: null,
      title : '',
      description : ''
    }
  }
  changeHandler = (event) => {
    this.setState({
      todoArray : {...this.state.todoArray, [event.target.name]: event.target.value}
    })
  }

  resetHandler = () =>{
    this.setState({todoArray : {
      id: null,
      title : '',
      description : ''
    }})
  }
  render() {
    return (
      <div>
      <h2>Add Task</h2>
      <form
      onSubmit={event => {
        event.preventDefault()
        if (!this.state.todoArray.title || !this.state.todoArray.description) return
        this.props.addUser(this.state.todoArray)
        this.setState({todoArray : {
          id: null,
          title : '',
          description : ''
        }})
      }}
      >
        <div className="form-group mt-4">
          <label>Task Title</label>

          <input 
            type="text" 
            className="form-control" 
            name = "title" 
            placeholder="Enter task title" 
            onChange = {this.changeHandler} 
            value={this.state.todoArray.title} 
            autoComplete="off" 
          />

        </div>
        <div className="form-group mt-4">
          <label>Task Description</label>

          <input 
            type="text" 
            className="form-control" 
            name = "description" 
            placeholder="Enter task description"  
            onChange = {this.changeHandler} 
            value={this.state.todoArray.description} 
            autoComplete="off"
          />

        </div>
        <button className="btn btn-success">Add Task</button>
        <button className="btn btn-info ml-3" onClick={this.resetHandler}>Reset</button>
      </form>
      </div>
    );
  }
}