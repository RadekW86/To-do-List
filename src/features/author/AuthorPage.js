import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";

function AuthorPage() {
  return (
    <Container>
      <Header title="O developerze" />
      <Section
        title="Radosław Włodarski"
        body={
          <>
            <p>
              Mam na imię Radek. Uczę się <strong>programować w
              JavaScript</strong>.
            </p>
            <p>
              Mam 36 lat. Mieszkam w woj. śląskim w okolicach Katowic.
              Interesuję się <strong>majsterkowaniem</strong> 🛠️ i grą na instrumentach (<strong>gitara 🎸 i
              pianino 🎹</strong>). Uwielbiam też wszelkie ciekawostki naukowe. W ramach
              ulubionego relaksu żegluję... ⛵
            </p>
          </>
        }
      />
    </Container>
  );
}

export default AuthorPage;
