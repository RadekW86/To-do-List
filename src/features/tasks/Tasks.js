import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import TopButton from "./Buttons/TopButton";
import BottomButtons from "./Buttons/BottomButtons";
import Form from "./Form";
import List from "./List";

function Tasks() {
  return (
    <Container>
      <Header title="Lista Zadań" />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<TopButton />}
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<BottomButtons />}
        body={<List />}
      />
    </Container>
  );
}

export default Tasks;
