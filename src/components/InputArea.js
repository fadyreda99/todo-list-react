import React, { useState } from "react";
import "../assets/css/Todo.css";

const InputArea = (props) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputText(newValue);
  };

  const stopRefresh = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center form">
      <form onSubmit={stopRefresh}>
        <input
          type="text"
          placeholder="Write your tasks"
          className="text-center"
          onChange={handleChange}
          value={inputText}
        />
        <button
          onClick={() => {
            props.onAdd(inputText);
            setInputText("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default InputArea;
