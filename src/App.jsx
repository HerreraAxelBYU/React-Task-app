import TaskList from './TaskList'
import Taskform from './TaskForm'
import {useState, useEffect} from 'react'
import { tasks as data } from "./tasks";


function App() {

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(titleTask) {
    setTasks([...tasks, {
      title: titleTask,
      id: tasks.length,
      description: 'algo'
    }]) 
  }

  return (
    <div>

      <Taskform createTask= {createTask} />
      <TaskList tasks= {tasks} />

    </div>
    
  )
}

export default App
