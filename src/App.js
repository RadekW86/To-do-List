import { useState } from "react";
import Buttons from "./Buttons";
import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Section from "./Section";
import { useTasks } from "./useTasks";

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const {
    taskTable,
    removeTask,
    toggleTaskDone,
    markAllDone,
    addNewTask,
    inputRef,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista Zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} inputRef={inputRef} />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            taskTable={taskTable}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            markAllDone={markAllDone}
          />
        }
        body={
          <List
            taskTable={taskTable}
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
