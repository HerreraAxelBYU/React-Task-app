import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1>No hay tareas aun</h1>;
  }

  return (
    <div className="w-full relative flex justify-center items-center">

      <div className="w-[400px] absolute -top-8 grid grid-cols-1">

        {tasks.map((task) => (
          <TaskCard key={task.id} task={task}></TaskCard>
          
        ))}

      </div>
    </div>
  );
}

export default TaskList;
