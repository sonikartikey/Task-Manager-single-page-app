import React, { useState } from "react";
import Subtask from "./Subtask";
import Input from "./Input";
import Item from './Item'

const Task = ({ task, taskIndex, tasks, setTasks }) => {
  // const [taskTitle, setTaskTitle] = useState(task.taskTitle)
  const [time, setTime] = useState(0);
  const [subTaskFlag, setsubTaskFlag] = useState(false);
  const name = 'monkey';


  const subtaskList = task.subtask.map((e, i) => (
    <Subtask
      key={e.id}
      subIndex={i}
      subtask={e}
      // subtasks={subtasks}
      // setSubtasks={setSubtasks}
      task={task}
      taskIndex={taskIndex}
      tasks={tasks}
      setTasks={setTasks}
    />
  ));

  const numberOfDoneSubTask = task.subtask.filter(e => e.isDone).length
  const numberOfDoneTask = tasks.filter(e => e.isDone).length
  console.log(`Only numberOfDoneTask ${numberOfDoneTask}`)

  const changeVal = () => {
    console.log("hey chanm,")
    console.log("all tasks ", tasks)
    console.log("single tasks", task)
    console.log("subtaskssss  ", task.subtask)

    // tasks.task = {...task ,  task.subtask:{}}
  }

  // if (task.subtask.length > 0 && numberOfDoneSubTask >= 1) {
  //   while (numberOfDoneSubTask != task.subtask.length) {
  //     console.log("timer start")
  //     // const timer = document.querySelector('#timer');
  //     var counter = 0;

  //     let interval = setInterval(() => {
  //       counter += 1

  //       console.log(`counterer varibale ${counter}`)

  //     }, 1000);
  //     while (numberOfDoneSubTask == task.subtask.length) {
  //       console.log(`inside clear Interval`)
  //       clearInterval(interval)
  //       break;

  //     }
  //     break;
  //   }

  // }

  // if (task.subtask.length > 0 && numberOfDoneSubTask == task.subtask.length) {
  //   console.log("timer end", counter)

  // }



  const timeTaken = (numberOfDoneSubTask == task.subtask.length) ? "Time Taken to complete the Sub Tasks" : ""

  console.log(`number of done subtasks  ${numberOfDoneSubTask} , count of subtaks of tasks${task.subtask.length} , 
  count of tasks${tasks.length}`)

  const resetButton = <button onClick={changeVal}>Clear all complete tasks</button>
  const resetButtonProp = (numberOfDoneSubTask == task.subtask.length) ? resetButton : ""

  const tasksstyle = { textDecorationLine: (numberOfDoneSubTask == task.subtask.length) ? "line-through" : "none" };



  return (
    <div>
      <br />

      <Item

        // subtasks={subtasks}
        // setSubtasks={setSubtasks}
        tasksstyle={tasksstyle}
        resetButtonProp={resetButtonProp}
        timeTaken={timeTaken}
        taskIndex={taskIndex}
        task={task}
        tasks={tasks}
        setTasks={setTasks}
        // taskTitle={taskTitle}
        // setTaskTitle={setTaskTitle}
        whatList={2}
        value={task.taskTitle}
        isDone={task.isDone}
      />
      <span>{numberOfDoneSubTask}/{task.subtask.length}</span>
      {subtaskList}
      <Input
        // list={subtasks}
        // setList={setSubtasks}
        placeholder={"Add subtask..."}
        whatList={1}
        task={task}
        taskIndex={taskIndex}
        // subtasks={subtasks}
        // setSubtasks={setSubtasks}
        tasks={tasks}
        setTasks={setTasks}
      />

      {(numberOfDoneSubTask && (numberOfDoneSubTask == task.subtask.length)) ? `Time Taken to complete the task is $::time` : ""}
      {/* {subTaskFlag} */}

    </div>
  );
};

export default Task;
