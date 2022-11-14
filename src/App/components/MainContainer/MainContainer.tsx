import React, {  useState } from "react";
import './MainContainer.css';
import ToDoInput from "../ToDoInput/ToDoInput";
import Footer from "../Footer/Footer";
import { TaskType } from '../../types/task';
import Task from '../Task/Task';

const MainContainer = () => {

  const [inputText, setInputText] = useState('');
  const [listTask, setListTask] = useState<Array<TaskType>>([]);
  const [counter, setCounter] = useState(0)

  // const incrementar = (num: number) => {
  //   setCounter(counter + num)
  // }

  const onActionAddTask = () => {
    if(inputText.trim() !== ""){
      const listIdex = listTask.map(value => value.index);
      console.log(...listIdex);
      setListTask([...listTask, { status: false, title: inputText, index: Math.max(...listIdex, 0) + 1 }]);
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
                     
        <Footer 
          valor = {counter}
        />
      </div>
    </div>
  );
}

export default MainContainer;
