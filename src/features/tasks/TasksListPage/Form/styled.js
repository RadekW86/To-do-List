import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledAddButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};;
  color: white;
  padding: 10px;
  border: none;
  transition: 0.4s;

  &:hover {
    filter: brightness(110%);
    transform: scale(1.05);
  }

  &:active {
    filter: brightness(120%);
  }
`;
