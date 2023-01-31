import React, { useState } from "react";

const Item = ({
  subIndex,
  taskIndex,
  
  // task,
  // subtask,
  whatList,

  value,
  isDone,
  tasks,
  setTasks,
  timeTaken,
  resetButtonProp,
  tasksstyle
}) => {
  const [inputText, setInputText] = useState(value);
  // const [checkStatus, setCheckStatus] = useState(isDone);

  const handleDel = () => {
    const tasksCopy = [...tasks];
    tasksCopy[taskIndex].subtask.splice(subIndex, 1);
    setTasks(tasksCopy);
  };

  const editInput = (e) => {
    const newInputVal = e.target.value;
    setInputText(newInputVal);
  };

  const changeDoneStatus = () => {
    const tasksCopy = [...tasks];
    let statusCopy = false;
    if (whatList === 1) {
      //update subtask
      statusCopy = tasksCopy[taskIndex].subtask[subIndex].isDone;
      tasksCopy[taskIndex].subtask[subIndex].isDone = !statusCopy;
    } else {
      //updaet task
      statusCopy = tasksCopy[taskIndex].isDone;
      tasksCopy[taskIndex].isDone = !statusCopy;
    }

    // setCheckStatus(!statusCopy);
    setTasks(tasksCopy);
  };

  const update = (e) => {
    if (e.keyCode === 13) {
      const tasksCopy = [...tasks];
      if (whatList === 1) {
        //update subtask
        tasksCopy[taskIndex].subtask[subIndex].subtaskTitle = inputText;
      } else {
        //update task
        tasksCopy[taskIndex].taskTitle = inputText;
      }

      setTasks(tasksCopy);
    }
  };

  const style = { textDecorationLine: isDone ? "line-through" : "none" };
 

  return (
    <div>
      <input type="checkbox" checked={isDone} onChange={changeDoneStatus} />
      <input 
        style={style}
        value={inputText}
        onChange={editInput}
        onKeyDown={update}
      />
      {whatList === 1 && isDone ? <button onClick={handleDel}>X</button> : ''}
    
     
     {/* {resetButtonProp} */}
     {/* {tasks.map((val,inx)=>{
      tasks ?  (val.length >= 1 && val[inx].subtask.length == 0) ?" " : <h3>{timeTaken}</h3> : ""
     })} */}
      {/* {tasks ?  (tasks.length >= 1 && tasks[tasks.length-1].subtask.length == 0) ?" " : <h3>{timeTaken} {resetButtonProp}</h3>  : ""} */}
      
    </div>
  );
};

export default Item;
