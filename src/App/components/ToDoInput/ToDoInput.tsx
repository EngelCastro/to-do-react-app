import React from "react";
import './ToDoInput.css';

const ToDoInput = () => {
  return (
    <div className = "to-do-input" >
      <div className = "container-input" >
        <input 
          type = "text" 
          className = "cl-input" 
          placeholder = "Enter a task here.."
        />
      </div>
      <div className = "container-button" >
        <span className="cl-button">Add</span>
      </div>
    </div>

  );
}

export default ToDoInput;