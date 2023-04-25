import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: white;
  margin: 10px 0;
  box-shadow: 0 0 5px #ddd;
`;

export const StyledSectionTop = styled.div`
  font-size: 20px;
  border-bottom: 1px solid #ddd;
  padding: 20px;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-gap: 5px;
  }
`;

export const StyledSectionHeading = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const StyledSectionBody = styled.div`
  padding: 20px;
`;
