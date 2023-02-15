import { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";

const ModifyTask = ({ modify, setModify, task }) => {
  const [modifyInput, setModifyInput] = useState("");

  const { tasks, setTasks } = useContext(TaskContext);

  const handleChange = (event) => {
    if (event.target.value) {
      setModifyInput(event.target.value);
    }
  };
  const handleClick = () => {
    const prevTasks = tasks;
    const index = prevTasks.findIndex((tsk) => tsk === task);
    if (modifyInput.length > 0) {
      prevTasks.splice(index, 1, modifyInput);
      setTasks([...prevTasks]);
      setModify(!modify);
    } else {
      setModify(!modify);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="modify-task">
      <input onChange={handleChange} onKeyDown={handleKeyDown}></input>
      <button onClick={handleClick}>
        <i className="fa-solid fa-circle-check"></i>
      </button>
    </div>
  );
};

export default ModifyTask;
