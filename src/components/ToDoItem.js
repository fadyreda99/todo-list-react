import React from "react";
import "../assets/css/Todo.css";

const ToDoItem = (props) => {
  return (
    <div onClick={() =>{
        props.onChecked(props.id);
    }}>
      <li>{props.text}</li>
    </div>
  );
};

export default ToDoItem;
