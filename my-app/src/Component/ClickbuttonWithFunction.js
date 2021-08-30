import React from "react";

function ClickbuttonWithFunction() {
  function Buttonclick() {
    console.log(" Click button");
  }
  return (
    <div>
      <br />
      <button className="btn btn-info ms-2" onClick={Buttonclick}>
        Click [Using Function]
      </button>
    </div>
  );
}

export default ClickbuttonWithFunction;
