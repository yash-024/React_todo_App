import React, { useState } from "react";
import Counter from "./Component/Counter";

const AddTodo = (props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  // var count = 1;
  const addTodoData = (e) => {
    e.preventDefault();
    //   var array;
    //   var fullname = { id: count++, name: name, desc: desc };
    //   let getLocalStorage = localStorage.getItem("todo");

    //   if (getLocalStorage == null) {
    //     array = [];
    //   } else {
    //     array = JSON.parse(getLocalStorage);
    //   }
    //   array.push(fullname);

    //   localStorage.setItem("todo", JSON.stringify(array));
    //   console.log(fullname);
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className=" text-center"> Add Details </h2>
          <form className="shadow p-4" onSubmit={addTodoData}>
            {/* <form className="shadow p-4" onSubmit={todoadd}> */}
            <div className="form-group">
              <label htmlFor="exampleInputEmail1"> Name </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
                value={props.name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1"> Description </label>
              <input
                type="text"
                className="form-control"
                id="Desc"
                placeholder=""
                value={props.desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 my-3"
              onClick={() => props.addTodoData(name, desc)}
            >
              Submit
            </button>
          </form>

          <ul className="list"></ul>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
