import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm({}) {
  const [title, setTitle] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.key === "Enter") {
      createTask({
        title,
      });
      setTitle("");
    }
  };

  return (
    <div className="w-full h-[300px] bg-[url(./src/assets/bg-desktop-dark.jpg)] grid grid-rows-2 justify-items-center items-center ">
      <div className="w-[400px] h-[100px] flex justify-between items-end  ">
        <h1 className="text-4xl text-white font-semibold tracking-widest   ">
          TODO
        </h1>
        <img
          className="w-[30px] h-[30px]"
          src="./src/assets/icon-sun.svg"
          alt=""
        />
      </div>

      <div className="w-[400px] h-[100px] flex justify-start">
        <form onKeyUp={handleSubmit} className="">
          <input
            type="text"
            placeholder="Escribe tu tarea"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            autoFocus
            className="w-[400px] bg-[#25273C] px-7 py-4"
          />
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
