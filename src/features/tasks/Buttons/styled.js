import styled from "styled-components";

export const StyledButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.primaryColor};
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
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }

  &:disabled {
    color: lightgray;
  }
`;
