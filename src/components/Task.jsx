import React, { useState, useEffect } from "react";
import Button from "./Button";
import CheckBox from "./CheckBox";
import ModifyTask from "./ModifyTask";
import TaskDate from "./TaskDate";

const styleBtn = ["x", "..."];

const Task = ({ value }) => {
  const [modify, setModify] = useState(true);
  const [taskDate, setTaskDate] = useState({ date: "", time: "" });
  const [checked, setChecked] = useState("");
  useEffect(() => {
    setTaskDate({
      date: new Date().toLocaleDateString("en-GB"),
      time: new Date().toLocaleTimeString("en-GB"),
    });
  }, [modify]);

  return (
    <div className="task">
      {modify ? (
        <>
          <CheckBox setChecked={setChecked} />
          <li className={`task-li`}>
            <p><span className={`${checked}`}>{value}</span></p>
            <TaskDate taskDate={taskDate} />
          </li>
          <div className="group-btn">
            {styleBtn.map((item, i) => (
              <Button
                key={i}
                type={item}
                task={value}
                setModify={setModify}
                modify={modify}
              />
            ))}
          </div>
        </>
      ) : (
        <ModifyTask modify={modify} setModify={setModify} task={value} />
      )}
    </div>
  );
};

export default Task;
