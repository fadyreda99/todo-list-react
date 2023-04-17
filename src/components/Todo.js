import React, { useState } from "react";
import "../assets/css/Todo.css";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";

const Todo = () => {
  
  const [items, setItems] = useState([]);

  

  const addItem = (inputText) => {
    

    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
   
  };

  const deleteItem = (id) => {
    setItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="parent  pt-3">
            <h2 className="mb-2 text-center">To-Do List</h2>
            <InputArea onAdd={addItem} />

            <div className="items mx-3 my-3">
              <ul>
                {items.map((todoItem, index) => (
                  <ToDoItem
                    key={index}
                    id={index}
                    text={todoItem}
                    onChecked={deleteItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;

