import { useState } from "react";
import { StyledForm, StyledFormInput, StyledAddButton } from "./styled.js";

const Form = (props) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedInput = newTaskContent.trim();

    if (trimmedInput) {
      props.addNewTask(trimmedInput);
    }

    setNewTaskContent("");
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <StyledFormInput
        value={newTaskContent}
        placeholder="Co jest do zrobienia?"
        ref={props.inputRef}
        onChange={(event) => setNewTaskContent(event.target.value)}
      />
      <StyledAddButton>Dodaj zadanie</StyledAddButton>
    </StyledForm>
  );
};

export default Form;
