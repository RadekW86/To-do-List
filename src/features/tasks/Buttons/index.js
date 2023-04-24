import { useSelector, useDispatch } from "react-redux";
import { StyledButton } from "./styled.js";
import {
  selectTasksState,
  toggleHideDone,
  markAllDone,
  fetchExampleTasks,
} from "../tasksSlice.js";

const Buttons = () => {
  const { taskTable, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <div>
      <StyledButton onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </StyledButton>
      {taskTable.length > 0 && (
        <div>
          <StyledButton onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </StyledButton>
          <StyledButton
            onClick={() => dispatch(markAllDone())}
            disabled={taskTable.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </StyledButton>
        </div>
      )}
    </div>
  );
};
export default Buttons;
