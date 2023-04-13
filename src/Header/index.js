import { StyledHeader } from "./styled.js";

const Header = ({ title }) => (
  <header>
    <StyledHeader>{title}</StyledHeader>
  </header>
);

export default Header;
