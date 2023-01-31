import React, { useEffect, useState } from "react";
import Task from "./Task";
import Input from "./Input";
import './App.css';


const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const appName = "Task Manager single page app"
  const taskList = tasks.map((e, i) => (
    <Task
      key={Math.random() * 1000}
      task={e}
      taskIndex={i}
      tasks={tasks}
      setTasks={setTasks}
    />
  ));

  useEffect(() => {
    // console.log(tasks);
  }, [tasks, setTasks]);

  

  return (
    <div>
    <div id="mainContent">{appName} </div>
      <Input
        placeholder="Add task..."
        whatList={2}
        tasks={tasks}
        setTasks={setTasks}
      />
      {taskList}
    </div>
  );
};

export default TaskApp;
