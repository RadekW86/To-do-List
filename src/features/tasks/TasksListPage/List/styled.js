import styled, { css } from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min.js";

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid #ddd;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const StyledListContent = styled.div`
  flex-grow: 1;
  margin: 10px;
  word-break: break-word;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.textColor};
  
  &:visited {
    color: ${({ theme }) => theme.color.textColor};
  }
  &:hover {
    filter: brightness(120%);
  }
  &:focus {
    filter: brightness(120%);
  }
`;

export const StyledButton = styled.button`
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  transition: 0.4s;

  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }

  ${({ doneBox }) =>
    doneBox &&
    css`
      background-color: hsl(120, 60%, 35%);
    `}

  ${({ removeBox }) =>
    removeBox &&
    css`
      background-color: hsl(348, 83%, 45%);
      font-size: 14px;
    `}
`;
