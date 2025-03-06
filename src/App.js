import React, { useState } from "react";
import "./App.css";
//import TodoInput from "./components/TodoInput";
import TodoInput from "./components/TodoInput"; // Correct import
import TodoList from "./components/TodoList";

function App() {
  const [ListTodo, setListTodo] = useState([]);
  let addList = (InputText) => {
    if (InputText !== '')
      setListTodo([...ListTodo, InputText]);
  }
  const deleteListItem = (key) => {
    let newListTodo = [...ListTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">
          TODO
        </h1>
        <hr />
        {ListTodo.map((listItem, i) => {
          return (
            <TodoList key={i} index={i} item={listItem} deleteItem={deleteListItem} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
