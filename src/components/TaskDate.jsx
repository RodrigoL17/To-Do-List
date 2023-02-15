const TaskDate = ({ taskDate }) => {
  return <p className="task-date">{`${taskDate.date} - ${taskDate.time}`}</p>;
};

export default TaskDate;
