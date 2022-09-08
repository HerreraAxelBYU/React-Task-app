import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
import { CheckedButton } from './CheckedButton'

function TaskCard( { task } ) {

  const { deleteTask } = useContext(TaskContext)
  
  return (
    <div className='bg-gray-800 flex justify-between text-white p-4 border-b border-b-gray-700'>
        <div>
          <CheckedButton></CheckedButton>
        </div>
        <h1>{task.title}</h1>
        <img src="./src/assets/icon-cross.svg" alt="" className='w-[16px] h-[16px]'
         onClick={ () => deleteTask(task.id) }
        />
    </div>
  )
}

export default TaskCard;