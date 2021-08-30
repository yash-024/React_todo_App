import "./App.css";
import Header from "./Header";
import { Footer } from "./Footer";
import Todos from "./Todos";
import React, { useState } from "react";
import { AddTodo } from "./AddTodo";
import Message from "./Component/Message";
import Counter from "./Component/Counter";
import ClassClick from "./Component/ClassClick";
import ClickbuttonWithFunction from "./Component/ClickbuttonWithFunction";
import EventBind from "./Component/EventBind";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App({ todoData }) {
  const onDelete = (todo) => {
    // console.log("I am delete of todo", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };

  // let snumber = 0;
  // const todoadd = (todo) => {
  //   setTodos({ sno:snumber,Name:todo.Name});
  // });
  const [todos, setTodos] = useState([
    { sno: 1, Name: "Leptop", desc: "Lenovo Yoga" },
    { sno: 2, Name: "Mobile", desc: "Samsung A50s" },
    { sno: 3, Name: "Bike", desc: "Hornet" },
  ]);

  return (
    <>
      {/* <ToastContainer /> */}
      <Header title="Todo List" />
      <div className="container py-5">
        <div className="">
          <Message />
          <Counter />
          <br />
        </div>

        {/* <div className="" placeholder="Testing">
          <EventBind /> 
          <ClassClick />
          <ClickbuttonWithFunction />
          <br />
        </div> */}

        <AddTodo />
        <br />
        <Todos todos={todos} onDelete={onDelete} />
      </div>
      <Footer />
    </>
  );
}

export default App;
