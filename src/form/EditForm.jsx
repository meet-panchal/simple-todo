import React, { Component } from "react";

export default class EditForm extends Component {
  state = {
    todoArray : this.props.editdata
  }
  editChangeHandler = (event)=>{
    const {name,value} = event.target
    this.setState({
      todoArray : {...this.state.todoArray,[name]:value}
    })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.editdata !== this.props.editdata) {
      this.setState({
        todoArray : this.props.editdata
      })
    }
  }
  render() {
    return (
      <div>
        <h2>Edit Task</h2>
      <form
      onSubmit={event => {
        event.preventDefault()
        this.props.updateUser(this.state.todoArray.id,this.state.todoArray)
      }}
      >
        <div className="form-group mt-4">
          <label>Task Title</label>
          <input 
          type="text"
          name = "title" 
          className="form-control" 
          placeholder="Enter task title" 
          value={this.state.todoArray.title}
          onChange={this.editChangeHandler}  />
        </div>
        <div className="form-group mt-4">
          <label>Task Description</label>
          <input 
          type="text"
          name = "description"
          className="form-control" 
          placeholder="Enter task description" 
          value={this.state.todoArray.description} 
          onChange={this.editChangeHandler} />
        </div>
        <button className="btn btn-success">Update</button>
        <button className="btn btn-info ml-3" onClick={this.props.cancelHandler}>Cancel</button>
      </form>
      </div>
    );
  }
}
