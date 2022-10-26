import { useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import List from "./Components/List";

function App() {
  //State
  const [todos, setTodos] = useState([
    { id: 1, nom: "Learn React", check: false },
    { id: 2, nom: "Understood React", check: false },
  ]);

  //Comportements
  function HandleDelete(id) {
    const todosCopy = [...todos];
    const todoFiltre = todosCopy.filter((todoList) => id !== todoList.id);
    setTodos(todoFiltre);
  }
  function handleAdd(TodoAAjouter) {
    const todosCopy = [...todos];
    todosCopy.push(TodoAAjouter);
    setTodos(todosCopy);
  }
  function handleCheck(id, event) {
    // console.log(event.target.checked);

    const todosCopy = [...todos];
    const todoFiltre = todosCopy.filter((todoList) => id == todoList.id);
    todoFiltre[0].check = event.target.checked;
    // todoFiltre.push(event.target.checked);
    setTodos(todosCopy);
  }

  //Render
  return (
    <div className="App">
      <h1>Todo List</h1>
      <List
        todos={todos}
        HandleDelete={HandleDelete}
        handleCheck={handleCheck}
      />
      <Form handleAdd={handleAdd} />
    </div>
  );
}

export default App;