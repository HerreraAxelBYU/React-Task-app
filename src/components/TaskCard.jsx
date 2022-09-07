import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard( { task } ) {

  const { deleteTask } = useContext(TaskContext)
  
  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
        <h1>{task.title}</h1>
        <p>{task.description}</p>
        <button onClick={ () => deleteTask(task.id) }>
          Eliminar Tarea
        </button>
    </div>
  )
}

export default TaskCard;