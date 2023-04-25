import { useSelector, useDispatch } from "react-redux";
import { StyledButton } from "../styled.js";
import { selectTasksState, fetchExampleTasks } from "../../tasksSlice.js";

const TopButton = () => {
  const { loading } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <StyledButton
      disabled={loading}
      onClick={() => dispatch(fetchExampleTasks())}
    >
      {loading ? "loading..." : "Pobierz przykładowe zadania"}
    </StyledButton>
  );
};
export default TopButton;
