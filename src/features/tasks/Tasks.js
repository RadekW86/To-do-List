import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectTasks } from "./tasksSlice";
import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import Buttons from "./Buttons";
import Form from "./Form";
import List from "./List";

function Tasks() {
  const { taskTable } = useSelector(selectTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskTable));
  }, [taskTable]);

  return (
    <Container>
      <Header title="Lista Zadań" />
      <Section 
        title="Dodaj nowe zadanie" 
        body={<Form />} />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<List />}
      />
    </Container>
  );
}

export default Tasks;
