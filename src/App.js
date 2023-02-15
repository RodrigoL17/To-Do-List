import { useContext } from "react";
import FormAddTask from "./components/FormAddTask";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import Wrapper from "./components/Wrapper";
import { TaskContext } from "./Context/TaskContext";

function App() {
  const { tasks } = useContext(TaskContext);

  return (
    <div className="App">
      <Wrapper>
        <FormAddTask />
        <TaskList>
          {tasks.map((task, i) => (
            <Task key={i} value={task} />
          ))}
        </TaskList>
      </Wrapper>
    </div>
  );
}

export default App;
