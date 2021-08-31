import React, { Component } from "react";

class Todo_List_CRUD extends Component {
  render(props) {
    return (
      <tr>
        <td>
          <label>{props.index}</label>
        </td>
        <td>
          <label>{props.id}</label>
        </td>
        <td>
          <input />
        </td>
        <td>
          <label>{props.createdAt.toLocaleTimeString()}</label>
        </td>
      </tr>
    );
  }
}

export default Todo_List_CRUD;
