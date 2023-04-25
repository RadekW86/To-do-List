import { useSelector, useDispatch } from "react-redux";
import { StyledButton, StyledButtons } from "../styled.js";
import { selectTasksState, fetchExampleTasks } from "../../tasksSlice.js";

const TopButton = () => {
  const { loading } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <StyledButtons>
      <StyledButton
        disabled={loading}
        onClick={() => dispatch(fetchExampleTasks())}
      >
        {loading ? "loading..." : "Pobierz przykładowe zadania"}
      </StyledButton>
    </StyledButtons>
  );
};
export default TopButton;
