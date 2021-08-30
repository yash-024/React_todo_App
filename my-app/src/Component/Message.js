import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
      butName: "Subscribe",
    };
  }

  chnageMessage() {
    debugger;
    if (this.state.butName === "Subscribe") {
      this.setState({
        message: "Thanks for subscribing :) ",
        butName: "Subscribed",
      });
    } else {
      this.setState({
        message: "Welcome visitor",
        butName: "Subscribe",
      });
    }
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-6 shadow p-4">
          <h1 className="text-center"> {this.state.message} </h1>
          <button
            className="btn btn-center btn-primary w-20 my-3"
            onClick={() => this.chnageMessage()}
          >
            {this.state.butName}
          </button>
        </div>
      </div>
    );
  }
}

export default Message;
