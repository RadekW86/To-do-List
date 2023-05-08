import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice.js";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, StyledAddButton } from "./styled.js";
import { StyledFormInput } from "../Input/index.js";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedInput = newTaskContent.trim();
    
    if (trimmedInput) {
      dispatch(
        addTask({
          content: trimmedInput,
          done: false,
          id: nanoid(),
        })
      );
    }
    
    inputRef.current.focus();
    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledFormInput
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        ref={inputRef}
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <StyledAddButton>Dodaj zadanie</StyledAddButton>
    </StyledForm>
  );
};

export default Form;
