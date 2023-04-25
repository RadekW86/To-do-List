import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { useSelector } from "react-redux";
import { selectTaskById } from "../tasksSlice";

const TaskPage = () => {
  const { id } = useParams();
  const task = useSelector((state) => selectTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={
          task ? task.content : "❌❌❌ 😱 Nie ma takiego zadania 😱 ❌❌❌"
        }
        body={
          task ? (
            <>
              <strong>Ukończono: </strong> {task.done ? "Tak ✔️" : "Nie"}
            </>
          ) : (
            "404 - nie znaleziono"
          )
        }
      />
    </Container>
  );
};

export default TaskPage;
