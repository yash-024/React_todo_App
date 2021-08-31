import React from "react";

function ListKey() {
  const Names = ["Yash", "Jay", "Raj"];
  const NameList = Names.map((name) => <h2 key={name}>{name}</h2>);

  return (
    <div>
      {NameList}
      <br />
      {Names.map((name, index) => (
        <h2>
          {index}
          {name}
        </h2>
      ))}
    </div>
  );
}

export default ListKey;
