import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

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
      <Route path="/Tasks">
        <Tasks />
      </Route>
      <Route path="/Developer">
        <Author />
      </Route>
      <Route path="/">
        <Redirect to="/Tasks" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
