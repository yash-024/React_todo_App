import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count > 0 ? this.state.count - 1 : 0,
    });
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-4">
          <h1 className="text-center"> Counter </h1>
          <h3> Count : {this.state.count}</h3>
          <button className="btn btn-primary" onClick={() => this.increment()}>
            +
          </button>

          <button
            className="btn btn-primary ms-2"
            onClick={() => this.decrement()}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
