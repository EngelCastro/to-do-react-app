import React, {  useState } from "react";
import './MainContainer.css';
import ToDoInput from "../ToDoInput/ToDoInput";
import Footer from "../Footer/Footer";
import { TaskType } from '../../types/task';
import Task from '../Task/Task';

const MainContainer = () => {

  const [inputText, setInputText] = useState('');
  const [listTask, setListTask] = useState<Array<TaskType>>([]);
  const [counter, setCounter] = useState(0);
  
  const onActionAddTask = () => {
    if(inputText.trim() !== ""){
      setListTask([...listTask, { status: false, title: inputText }]);
      setInputText("");
      setCounter(counter + 1);
    }
    else {
      setInputText("");
    }
  };


  const handleInputTextChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
  }

  return (
    <div className="main-container">
      <div className="to-do-container">
        <h2 className="title">
          To Do App
        </h2>
        <ToDoInput 
          inputText = { inputText }       
          onAddItem = { onActionAddTask } 
          onChange = { handleInputTextChange } 
        />
        <div className="task-item-container">
          {
            listTask.map((task, index) => (
              <Task
                key = { index }
                task = { task }
                index = {index}
                setListTask = {setListTask}
              />
            ))
          }
        </div>
                     
        <Footer 
          valor = {listTask.length}
          realized = {listTask.filter(task => task.status === true).length}
        />
      </div>
    </div>
  );
}

export default MainContainer;
