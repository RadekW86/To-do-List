import React, { useState } from "react";
import Buttons from "./Buttons";
import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Section from "./Section";

const taskTable = [
  { id: 1, content: "Przejść na React", done: false },
  { id: 2, content: "nie jeść", done: true },
];

function App() {
  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };
  return (
    <Container>
      <Header title="Lista Zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            taskTable={taskTable}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
          />
        }
        body={<List taskTable={taskTable} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
