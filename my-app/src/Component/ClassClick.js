import React, { Component } from "react";

class ClassClick extends Component {
  clickeventHandler() {
    console.log(" Click Me Button");
  }
  render() {
    return (
      <div>
        <button
          className="btn btn-success ms-2 mt-2"
          onClick={this.clickeventHandler}
        >
          Click [Using Class]
        </button>
      </div>
    );
  }
}

export default ClassClick;
