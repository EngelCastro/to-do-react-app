import React, { Dispatch, SetStateAction } from "react";
import './Task.css';
import { TaskType } from "../../types/task";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'


type Props = {
  setListTask:Dispatch<SetStateAction<TaskType[]>>;
  task: TaskType;
  index: number;
};

function Task(props: Props) {
  const { task, index, setListTask } = props;

  const handleClickTask = () => {
    setListTask((actualListTask) => {
      const newListTask = [...actualListTask];
      const taskEdit = actualListTask[index];
      const newStatus = !taskEdit.status;

      newListTask[index] = {
        ...taskEdit,
        status: newStatus,
      };
      return newListTask;
    });
  };

  const daleteClickTask = () => {
    setListTask((actualListTask) => {
      const newListTask = [...actualListTask];
      newListTask.splice(index, 1);
      return newListTask;
    });
  };
  return (
  <div className = {'task-container'}>
    <div  className = {`radio-buttom ${task.status}`}
      onClick={() => handleClickTask()} 
    >
    </div>
    <div className = 'containerText'>
      { task.title }
    </div>
    <div className = {'delete'} style = {{color: 'rgb(68, 68, 68)'}} >
    <FontAwesomeIcon 
      className = {'trash-icon'} 
      icon={faTrashCan} 
      onClick= {() => daleteClickTask()}
    />
    </div>
  </div>
  );
}

export default Task;
