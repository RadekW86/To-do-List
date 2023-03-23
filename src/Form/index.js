import React, { useState } from "react";
import "./style.css";

const Form = (props) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    const input = newTaskContent.trim();
    if (!input) {
      setNewTaskContent("");
      return;
    }
    props.addNewTask(input);
    setNewTaskContent("");
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        className="form__input"
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <button className="form__addButton">Dodaj zadanie</button>
    </form>
  );
};

export default Form;
