import styled from "styled-components";

export const StyledButton = styled.button`
  color: teal;
  border: none;
  background: transparent;
  margin: 0 0 0 20px;
  transition: 0.4s;
  font-size: 17px;

  &:hover {
    color: hsl(180, 100%, 30%);
  }

  &:active {
    color: hsl(180, 100%, 35%);
  }

  &:disabled {
    color: lightgray;
  }
`;
