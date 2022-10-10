import React, {  useState } from "react";
import './MainContainer.css';
import ToDoInput from "../ToDoInput/ToDoInput";
import Footer from "../Footer/Footer";
import { TaskType } from '../../types/task';
import Task from '../Task/Task';

const MainContainer = () => {

  const [inputText, setInputText] = useState('');
  const [listTask, setListTask] = useState<Array<TaskType>>([]);

  const onActionAddTask = () => {
    setListTask([...listTask, { status: false, title: inputText , active: 'nooactive'}]);
    console.log();
    setInputText('');
  };

  const handleInputTextChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
  }

  const onCheck = (index: number) => {
    const taskEdit = listTask[index];
    console.log(index);
    listTask[index] = {
      ...taskEdit,
      status: !taskEdit.status, 
      active: taskEdit.status ? 'active' : '',
      // active: taskEdit.status === true? 'active': '',
    };
    console.log(taskEdit.status,taskEdit.status === true? 'active': '');
    setListTask([...listTask]);
  }

  
  // const onChangeClassName = (className: string) => {
  //   const taskEdit = listTask[className];
  // };

  return (
    <div className="main-container">
      <div className="to-do-container">
        <h2 className="title">
          To Do App
        </h2>
        <ToDoInput 
          onAddItem = { onActionAddTask } 
          onChange = { handleInputTextChange } 
          inputText = { inputText }       
        />
        {
          listTask.map((task, index) => (
            <Task
              key = { index }
              task = { task }
              // active = "active"
              onCheck = { () => onCheck(index)}
            />
          ))
        }
        <Footer />
      </div>
    </div>
  );
}

export default MainContainer;
