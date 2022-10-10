import { useState } from "react";

import ToDoInput from "../ToDoInput/ToDoInput";
import Footer from "../Footer/Footer";
import Task from "../Task/Task";
import { TaskType } from "../../types/task";

import "./MainContainer.css";

const MainContainer = () => {
  const [inputText, setInputText] = useState("");
  const [listTask, setListTask] = useState<Array<TaskType>>([]);

  const onActionAddTask = () => {
    setListTask([...listTask, { status: false, title: inputText }]);
    setInputText("");
  };

  const handleInputTextChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
  };

  return (
    <div className="main-container">
      <div className="to-do-container">
        <h2 className="title">To Do App</h2>
        <ToDoInput
          inputText={inputText}
          onAddItem={onActionAddTask}
          onChange={handleInputTextChange}
        />
        {listTask.map((task, index) => (
          <Task
            key={index} // Esto no es una prop
            task={task}
            index={index}
            setListTask={setListTask}
          />
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default MainContainer;
