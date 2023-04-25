import { useSelector, useDispatch } from "react-redux";
import {
  selectTasksState,
  toggleTaskDone,
  removeTask,
  selectTasksByQuery,
} from "../../tasksSlice.js";
import {
  StyledList,
  StyledListItem,
  StyledListContent,
  StyledButton,
} from "./styled.js";
import {
  Link,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min.js";
import searchQueryParamName from "../searchQueryParamName.js";

const List = () => {
  const locaction = useLocation();
  const query = new URLSearchParams(locaction.search).get(searchQueryParamName);

  const taskTable = useSelector((state) => selectTasksByQuery(state, query));
  const { hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <StyledList>
      {taskTable.map((task) => (
        <StyledListItem key={task.id} hidden={task.done && hideDone}>
          <StyledButton
            doneBox
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔️" : ""}
          </StyledButton>
          <StyledListContent done={task.done}>
            <Link to={`/Tasks/${task.id}`}>{task.content}</Link>
          </StyledListContent>
          <StyledButton removeBox onClick={() => dispatch(removeTask(task.id))}>
            🗑️
          </StyledButton>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default List;
