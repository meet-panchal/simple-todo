import React, { Component } from "react";

export default class TaskTable extends Component {
  render() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Task Title</th>
            <th scope="col">Task Desc.</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {this.props.data.length > 0 ? (
            this.props.data.map((task,index) => {
              return (
                <tr key={task.id}>
                  <th scope="row">{index+1}</th>
                  <td>{task.title}</td>
                  <td>{task.description}</td>
                  <td>
                    <button className="btn btn-danger ml-3" onClick={()=>this.props.deleteUser(task.id)}>Delete</button>
                    <button className="btn btn-warning ml-3" onClick={()=>this.props.editUser(task)}>Edit</button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>No Task</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}
