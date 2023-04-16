import { StyledButton } from "./styled.js";

const Buttons = ({ taskTable, toggleHideDone, hideDone, markAllDone }) =>
  taskTable.length > 0 && (
    <div>
      <StyledButton onClick={toggleHideDone}>
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </StyledButton>
      <StyledButton
        onClick={markAllDone}
        disabled={taskTable.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </StyledButton>
    </div>
  );

export default Buttons;
