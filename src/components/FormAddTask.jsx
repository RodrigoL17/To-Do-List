import { useContext, useState } from "react";
import { TaskContext } from "../Context/TaskContext";

const FormAddTask = () => {
  const [input, setInput] = useState("");

  const { tasks, setTasks } = useContext(TaskContext);

  const handleChange = (event) => {
    if (event.target.value) {
      setInput(event.target.value);
    }
  };

  const handleClick = () => {
    const prevTasks = tasks;
    if (input.length > 0) {
      prevTasks.push(input);
      setTasks([...prevTasks]);
      setInput("");
    }
    setInput("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="form-add-task">
      <input
        type="text"
        className="input"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={input}
      />
      <button onClick={handleClick} className="btn">
        <i className="fa-solid fa-square-plus"></i>
      </button>
    </div>
  );
};

export default FormAddTask;
