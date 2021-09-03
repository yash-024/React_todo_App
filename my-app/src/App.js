import "./App.css";
import Header from "./Header";
import { Footer } from "./Footer";
import Todos from "./Todos";
import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Message from "./Component/Message";
import Counter from "./Component/Counter";
import ClassClick from "./Component/ClassClick";
import ClickbuttonWithFunction from "./Component/ClickbuttonWithFunction";
import EventBind from "./Component/EventBind";
import ParentComponent from "./Component/ParentComponent";
import ListKey from "./Component/ListKey";
import Keyindex_with_todo_ADD_SORT from "./Component/Keyindex_with_todo_ADD_SORT";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
let count = 1;
function App({ props }) {
  const onDelete = (todo) => {
    // console.log("I am delete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  const addTodoData = (name, desc) => {
    debugger;
    var AddNewTodo = { sno: count++, Name: name, desc: desc };
    setTodos([...todos, AddNewTodo]);
  };
  // let snumber = 0;
  // const todoadd = (todo) => {
  //   setTodos({ sno:snumber,Name:todo.Name});
  // });
  const [todos, setTodos] = useState([
    // { sno: 1, Name: "Leptop", desc: "Lenovo Yoga" },
    // { sno: 2, Name: "Mobile", desc: "Samsung A50s" },
    // { sno: 3, Name: "Bike", desc: "Hornet" },
  ]);

  return (
    <>
      {/* <ToastContainer /> */}
      <Header title="Todo List" />
      <div className="container py-5">
        {/* <div className="">
          <Message />
          <Counter />
          <br />
        </div> */}

        {/* <div className="row justify-content-center" placeholder="Testing">
          <div className="col-md-6 shadow p-4">
            <Keyindex_with_todo_ADD_SORT />
            <EventBind />
            <ClassClick />
            <ClickbuttonWithFunction />
            <ParentComponent />
            <ListKey />
            <br />
          </div>
        </div> */}

        <AddTodo todos={todos} addTodoData={addTodoData} />
        <br />
        <Todos todos={todos} onDelete={onDelete} />
      </div>
      <Footer />
    </>
  );
}

export default App;
