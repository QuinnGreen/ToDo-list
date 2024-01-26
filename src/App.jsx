import { useState } from 'react'
import './App.css'

function App() {
  const [toDo, setToDo] = useState([]);
  const [task, setTask] = useState("")

  const addToDo = () => {
    if (task.trim() !=="") {
      setToDo([...toDo, { id: Date.now(), task, done: false}]);
      setTask("")
    }
  };
  
  const deleteToDo = (id) => {
    setToDo(toDo.filter((toDo) => toDo.id !== id));
  };
  

  const toggleDone = (id) => {
    setToDo(
      toDo.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  return (
    <div className="app">
       <h1>ToDo List</h1>
       <div className="add-toDo">
         <input
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className='addbutton' onClick={addToDo}>Add</button>
      </div>
      <ul className="toDoList">
        {toDo.map((item) => (
          <li key={item.id} className={item.done ? 'completed' : ''}>
            <span onClick={() => toggleDone(item.id)}>{item.task}</span>
            <button className="addbutton" onClick={() => deleteToDo(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

