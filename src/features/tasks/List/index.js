import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice.js";
import {
  StyledList,
  StyledListItem,
  StyledListContent,
  StyledButton,
} from "./styled.js";

const List = () => {
const {taskTable, hideDone} = useSelector(selectTasks);
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
          <StyledListContent 
           done={task.done}
          >
           {task.content}
          </StyledListContent>
          <StyledButton 
           removeBox 
           onClick={() => dispatch(removeTask(task.id))}
          >
           🗑️
          </StyledButton>
        </StyledListItem>
      ))}
    </StyledList>
  );
}

export default List;
