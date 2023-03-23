import React, { useState } from "react";
import Buttons from "./Buttons";
import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Section from "./Section";

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [taskTable, setTaskTable] = useState([
    { id: 1, content: "Przejść na React", done: false },
    { id: 2, content: "nie jeść", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTaskTable((taskTable) => taskTable.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTaskTable((taskTable) =>
      taskTable.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
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
        body={
          <List
            taskTable={taskTable}
            setTaskTable={setTaskTable}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />
    </Container>
  );
}

export default App;
