import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button
        className="btn btn-info"
        onClick={() => props.greetHandler("Child Name: Yash")}
      >
        Click Parent
      </button>
    </div>
  );
}

export default ChildComponent;
