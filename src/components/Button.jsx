import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

const Button = ({ type, task, setModify, modify }) => {
  const { tasks, setTasks } = useContext(TaskContext);

  const getValueBtn = (btn) => {
    const valueBtn = {
      x: <i className="fa-solid fa-circle-xmark"></i>,
      "...": <i className="fa-solid fa-pen"></i>,
    };
    return valueBtn[btn];
  };

  const getClassBtn = (btn) => {
    const classBtn = {
      x: "delete",
      "...": "update",
    };
    return classBtn[btn];
  };

  const deleteTask = () => {
    const prevTasks = tasks;
    const index = prevTasks.findIndex((tsk) => tsk === task);
    if (index > -1) {
      prevTasks.splice(index, 1);
      setTasks([...prevTasks]);
    }
  };

  const updateTask = () => {
    setModify(!modify);
  };

  const handleClick = () => {
    const typeBtn = {
      x: deleteTask,
      "...": updateTask,
    };
    if (typeBtn[type]) {
      return typeBtn[type]();
    }
  };

  return (
    <button className={`btn-${getClassBtn(type)}`} onClick={handleClick}>
      {getValueBtn(type)}
    </button>
  );
};

export default Button;
