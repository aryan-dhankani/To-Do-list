
import './App.css';
import { useState } from 'react';





function App() {
  
  const [todo, setTodo] = useState([]);
  const [newTask , setNewTask] = useState("");
  const handlechange = (event) => {
    setNewTask(event.target.value);
  } ;
  const addTask = () => {
    setTodo([...todo , newTask]);
  }

  const deleteTask = (taskname) => {
    setTodo(todo.filter((task) => {
      return task === taskname ?  false :  true 
    }))
  }

  return (
    <div className="App">
     
      <input type = "text" onChange={handlechange}/>
    
      <button onClick = {addTask}>Add Task</button>
      

      <div className='list'>
        {todo.map((task)=>{
          return (
          <div>
            <h1>{task}</h1>
            <button onClick={() => deleteTask (task)}>Delete Item</button>
          </div>)
        })}
      </div>

    </div>

    
  );
}



export default App;
