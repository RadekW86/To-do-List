import { StyledButton } from "./styled.js";

const Buttons = (props) =>
  props.taskTable.length > 0 && (
    <div>
      <StyledButton onClick={props.toggleHideDone}>
        {props.hideDone ? "Pokaż" : "Ukryj"} ukończone
      </StyledButton>
      <StyledButton
        onClick={props.markAllDone}
        disabled={props.taskTable.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </StyledButton>
    </div>
  );

export default Buttons;
