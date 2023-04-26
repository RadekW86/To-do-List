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
  StyledLink,
} from "./styled.js";
import { useQueryParameter } from "../queryParameters.js";
import searchQueryParamName from "../searchQueryParamName.js";

const List = () => {
  const query = useQueryParameter(searchQueryParamName);

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
            <StyledLink to={`/Tasks/${task.id}`}>{task.content}</StyledLink>
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
