import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/todosSlice";

function TodoForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addNewTodo(text));

    setText("");
  };

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        className="input"
        placeholder="Yeni görev ekleyin..."
        onChange={onInputChange}
        value={text}
      />
    </form>
  );
}

export default TodoForm;
