import React, { useState } from "react";

const Input = ({
  // subtask,
  // subIndex,
  // subtasks,
  // setSubtasks,
  tasks,
  setTasks,
  whatList,
  placeholder,
  taskIndex
}) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
    // console.log(e.target.value)
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      //add subtask
      if (whatList === 1) {

        const newSubtask = {
          id: Math.random(),
          subtaskTitle: inputText,
          isDone: false
        };


        const taskListCopy = [...tasks];
        taskListCopy[taskIndex].subtask.push(newSubtask);
        setTasks(taskListCopy);

      } else {
        setTasks([
          ...tasks,
          {
            id: Math.random(),
            taskTitle: inputText,
            isDone: false,
            desc: "",
            subtask: []
          }
        ]);
        
      }
      setInputText("");
    }
  };
  return (
    <input id="inputVal"
      onChange={handleChange}
      value={inputText}
      onKeyDown={handleEnter}
      placeholder={placeholder}
    />
  );
};

export default Input;
