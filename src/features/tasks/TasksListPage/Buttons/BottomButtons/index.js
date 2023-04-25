import { useSelector, useDispatch } from "react-redux";
import { StyledButton, StyledButtons } from "../styled.js";
import {
  selectTasksState,
  toggleHideDone,
  markAllDone,
} from "../../../tasksSlice.js";

const BottomButtons = () => {
  const { taskTable, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    taskTable.length > 0 && (
      <StyledButtons>
        <StyledButton onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </StyledButton>
        <StyledButton
          onClick={() => dispatch(markAllDone())}
          disabled={taskTable.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </StyledButton>
      </StyledButtons>
    )
  );
};
export default BottomButtons;
