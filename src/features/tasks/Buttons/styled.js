import styled from "styled-components";

export const StyledButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button`
  color: teal;
  border: none;
  background: transparent;
  margin: 0 0 0 20px;
  transition: 0.25s;
  font-size: 17px;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 8px;
  }

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
