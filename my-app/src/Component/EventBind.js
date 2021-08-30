import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }
  //   clickHandler() {
  //     this.setState({
  //       message: (this.state.message = " Good Bye!"),
  //     });
  //     console.log(this);
  //   }

  clickHandler = () => {
    this.setState({
      message: "Good bye!",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button className="btn btn-secondary" onClick={this.clickHandler.bind(this)}> Event Bind click </button> */}
        {/* <button className="btn btn-secondary" onClick={()=>{this.clickHandler()}}> Event Bind click </button> */}
        <button className="btn btn-secondary" onClick={this.clickHandler}>
          Event Bind click
        </button>
      </div>
    );
  }
}

export default EventBind;
