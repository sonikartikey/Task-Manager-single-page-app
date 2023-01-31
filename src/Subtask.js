import React, { useState } from "react";
import Item from "./Item";

const Subtask = ({
  subtask,
  subIndex,
  // subtasks,
  // setSubtasks,
  task,
  taskIndex,
  tasks,
  setTasks
}) => {
  // const [subtaskTitle, setSubtaskTitle] = useState(subtask.subtaskTitle)
  return (
    <div>
      <Item
        subIndex={subIndex}
        // subtasks={subtasks}
        subtask={subtask}
        // setSubtasks={setSubtasks}
        taskIndex={taskIndex}
        task={task}
        tasks={tasks}
        setTasks={setTasks}
        whatList={1}
        value={subtask.subtaskTitle}
        isDone={subtask.isDone}
      />
    </div>
  );
};

export default Subtask;
