import React from "react";
import './MainContainer.css';
import ToDoInput from "../ToDoInput/ToDoInput";

const MainContainer = () => {
  return (
    <div className="main-container">
      <div className="to-do-container">
        <h2 className="title">
          To Do App
        </h2>
        <ToDoInput />
      </div>
    </div>
  );
}

export default MainContainer;
