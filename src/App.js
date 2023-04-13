import Buttons from "./Container/Section/Buttons";
import Container from "./Container";
import Form from "./Container/Section/Form";
import Header from "./Container/Header";
import List from "./Container/Section/List";
import Section from "./Container/Section";
import { useTasks } from "./useTasks";

function App() {
  const {
    taskTable,
    removeTask,
    toggleTaskDone,
    markAllDone,
    addNewTask,
    hideDone,
    toggleHideDone,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista Zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
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
