import React from "react";
import './Task.css';
import { TaskType } from "../../types/task";

type Props = {
  onCheck: Function,
  task: TaskType,
};

function Task(props: Props) {
  const { task, onCheck} = props
  console.log(`holas ${task.active}`)
  return (
  <div className = {`task-container`}>
    <div  className = {`radio-buttom ${task.active}`}
      onClick={ () => onCheck()} 
      // style={
      //   {
      //     backgroundColor: task.status? 'green': 'red'
      //   }
      // }
    >
    </div>
    { task.title }
  </div>
  );
}

export default Task;
