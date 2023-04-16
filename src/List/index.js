import {
  StyledList,
  StyledListItem,
  StyledListContent,
  StyledButton,
} from "./styled.js";

const List = ({ taskTable, hideDone, toggleTaskDone, removeTask }) => (
  <StyledList>
    {taskTable.map((task) => (
      <StyledListItem key={task.id} hidden={task.done && hideDone}>
        <StyledButton 
         doneBox 
         onClick={() => toggleTaskDone(task.id)}
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
         onClick={() => removeTask(task.id)}
        >
         🗑️
        </StyledButton>
      </StyledListItem>
    ))}
  </StyledList>
);

export default List;
