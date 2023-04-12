import {
  StyledSection,
  StyledSectionTop,
  StyledSectionHeading,
  StyledSectionBody,
} from "./styled.js";

const Section = ({ title, body, extraHeaderContent }) => (
  <StyledSection>
    <StyledSectionTop>
      <StyledSectionHeading>{title}</StyledSectionHeading>
      {extraHeaderContent}
    </StyledSectionTop>
    <StyledSectionBody>{body}</StyledSectionBody>
  </StyledSection>
);

export default Section;
