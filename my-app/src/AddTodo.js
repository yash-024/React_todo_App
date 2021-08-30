import React, { useState } from "react";

export const AddTodo = ({ todoData }) => {
  const [name, setName] = useState();
  const [desc, setDesc] = useState();

  const todoadd = (e) => {
    e.preventDeafault();

    // if (!name && !desc) {
    //   toast("Wow so easy !");
    // } else {
    //   todoData;
    // }
    todoData(name, desc);
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className=" text-center"> Add Details </h2>
          <form className="shadow p-4" onSubmit={todoadd}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1"> Name </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
                value={name}
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
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 my-3"
              onClick={todoData}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
