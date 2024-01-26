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
  
  // const toggleDone = (id) => {
  //   setToDo(
  //     toDo.map((toDo) => 
  //     toDo.id ? { ...toDo, done: !toDo.done } : toDo ))
  // };

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
      <ul className="toDo-list">
        {toDo.map((toDo) => (
          <li key={toDo.id}>
            <input type="checkbox" checked={toDo.done} onChange={() => toggleDone(toDo.id)}/>
            <span className={toDo.done ? 'done' : ''}>{toDo.task}</span>
            <button className='addbutton' onClick={() => deleteToDo(toDo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

