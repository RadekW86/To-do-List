import {
  HashRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min";
import Navigation from "./common/Navigation";
import TasksListPage from "./features/tasks/TasksListPage";
import TaskPage from "./features/tasks/TaskPage";
import AboutMePage from "./features/AboutMePage/AboutMePage";

const App = () => (
  <HashRouter>
    <Navigation/>

    <Switch>
      <Route path="/Tasks/:id">
        <TaskPage />
      </Route>
      <Route path="/Tasks">
        <TasksListPage />
      </Route>
      <Route path="/AboutMe">
        <AboutMePage />
      </Route>
      <Route path="/">
        <Redirect to="/Tasks" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
