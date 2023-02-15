import { createContext, useState } from "react";

const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const providerValues = {
    tasks,
    setTasks,
  };

  return (
    <TaskContext.Provider value={providerValues}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskContextProvider };
