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
    setListTask([...listTask, { status: false, title: inputText }]);
    setInputText("");
  };

  const handleInputTextChange = (event: React.FocusEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
  }

  // const onCheck = (index: number) => {
  //   const taskEdit = listTask[index];
  //   console.log(index);
  //   listTask[index] = {
  //     ...taskEdit,
  //     status: !taskEdit.status, 
  //     active: taskEdit.status ? 'active' : '',
     
  //   };
    
    // setListTask([...listTask]);
  // }

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
        <Footer />
      </div>
    </div>
  );
}

export default MainContainer;
