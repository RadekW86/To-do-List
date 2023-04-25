import {
  HashRouter,
  Link,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import TasksListPage from "./features/tasks/TasksListPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";

const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/Tasks">Lista Zadań</Link>
        </li>
        <li>
          <Link to="/Developer">O developerze</Link>
        </li>
      </ul>
    </nav>

    <Switch>
      <Route path="/Tasks/:id">
        <TaskPage />
      </Route>
      <Route path="/Tasks">
        <TasksListPage />
      </Route>
      <Route path="/Developer">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/Tasks" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
