import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      PrentName: "Prent",
    };

    this.greetPrent = this.greetPrent.bind(this);
  }

  greetPrent(ChildName) {
    alert(`Hello ${this.state.PrentName} of ${ChildName}`);
  }

  render() {
    return (
      <div className="mt-2">
        <ChildComponent greetHandler={this.greetPrent} />
      </div>
    );
  }
}

export default ParentComponent;
