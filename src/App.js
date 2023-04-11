import { useState } from "react";
import { useEffect } from "react";
import Buttons from "./Buttons";
import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import List from "./List";
import Section from "./Section";

const importLocalStorage = () => {
  const savedContent = localStorage.getItem("tasks");
  return savedContent ? JSON.parse(savedContent) : [];
};

function App() {
  const [hideDone, setHideDone] = useState(false);
  const [taskTable, setTaskTable] = useState(importLocalStorage());

  useEffect(() => {
    exportLocalStorage();
  }, [taskTable]);

  const exportLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(taskTable));
  };

  const toggleHideDone = () => {
    setHideDone((hideDone) => !hideDone);
  };

  const removeTask = (id) => {
    setTaskTable((taskTable) => taskTable.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTaskTable((taskTable) =>
      taskTable.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const markAllDone = () => {
    setTaskTable((taskTable) =>
      taskTable.map((task) => ({ ...task, done: true }))
    );
  };

  const addNewTask = (content) => {
    setTaskTable((taskTable) => [
      ...taskTable,
      {
        id: taskTable.length === 0 ? 1 : taskTable[taskTable.length - 1].id + 1,
        content,
        done: false,
      },
    ]);
  };

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
