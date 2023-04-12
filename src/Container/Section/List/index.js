import {
  StyledList,
  StyledListItem,
  StyledListContent,
  StyledButton,
} from "./styled.js";

const List = (props) => (
  <StyledList>
    {props.taskTable.map((task) => (
      <StyledListItem key={task.id} hidden={task.done && props.hideDone}>
        <StyledButton 
         doneBox 
         onClick={() => props.toggleTaskDone(task.id)}
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
         onClick={() => props.removeTask(task.id)}
        >
         🗑️
        </StyledButton>
      </StyledListItem>
    ))}
  </StyledList>
);

export default List;
