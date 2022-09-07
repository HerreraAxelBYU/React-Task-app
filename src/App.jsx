import TaskList from './components/TaskList'
import Taskform from './components/TaskForm'
import {useState, useEffect} from 'react'
import { tasks as data } from "./tasks";


function App() {

  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(task) {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }]) 
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter( task => task.id !== taskId))
  }

  return (
    <div>

      <Taskform createTask= {createTask} />
      <TaskList tasks= {tasks} deleteTask={deleteTask} />

    </div>
    
  )
}

export default App
