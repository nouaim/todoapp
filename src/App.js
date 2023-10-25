import './App.css';
import { useState, useRef } from "react";

function Header() {
  return (
    <h1>ToDo List</h1>
  )
}

function App() {
  const [todos, setTodos] = useState([]);

  const inputref = useRef()

  const handletodo = () => {
    const text = inputref.current.value;
    console.log(text);
    setTodos([...todos, text]);
    inputref.current.value = ""
  }

  return (
    <div className="App">
      <div className="todo-Container">
        <Header />
        <ul>
          {todos.map((item) => {
            return <li>{item}</li>
          })}
        </ul>
        <input ref={inputref} placeholder='Add an item' />
        <button onClick={handletodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
