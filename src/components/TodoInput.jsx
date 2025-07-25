import { useState } from "react";

export default function TodoInput({ handleAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <div className="input-container">
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputValue) {
              handleAddTodo(inputValue);
              setInputValue("");
            }
          }}
          placeholder="Add task"
        />
        <button
          onClick={() => {
            if (!inputValue) {
              return;
            }
            handleAddTodo(inputValue);
            setInputValue("");
          }}
        >
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </>
  );
}
