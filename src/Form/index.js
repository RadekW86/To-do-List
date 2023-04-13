import { useState, useRef } from "react";
import { StyledForm, StyledFormInput, StyledAddButton } from "./styled.js";

const Form = (props) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedInput = newTaskContent.trim();

    if (trimmedInput) {
      props.addNewTask(trimmedInput);
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
