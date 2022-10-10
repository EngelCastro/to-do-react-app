import { Dispatch, SetStateAction } from "react";

import { TaskType } from "../../types/task";

import "./Task.css";

type Props = {
  setListTask: Dispatch<SetStateAction<TaskType[]>>;
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

  return (
    <div className={`task-container`}>
      <div
        className={`radio-buttom ${task.status && "active"}`}
        onClick={() => handleClickTask()}
      ></div>
      {task.title}
    </div>
  );
}

export default Task;
