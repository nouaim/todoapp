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
    const newitem = { completed: false, text }
    setTodos([...todos, newitem]);
    inputref.current.value = ""
  }

  const handledone = (index) => {
    const newtodos = [...todos];
    newtodos[index].completed = !newtodos[index].completed
    setTodos(newtodos);
  }

  const handledelete = (index) => {
    const items = [...todos];
    items.splice(index, 1)
    setTodos(items);
  }

  console.log(todos);

  return (
    <div className="App">
      <div className="todo-Container">
        <Header />
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
            <div className='items'>
              <li
                className={completed ? "done" : ""} key={index} onClick={() => handledone(index)}>{text}
              </li>
                <span key={index} className='delete' onClick={() => handledelete(index)}>❌</span>
            </div>
          )})}
        </ul>
        <input ref={inputref} placeholder='Add an item' />
        <button onClick={handletodo}>Add</button>
      </div>
    </div>
  );
}

export default App;
