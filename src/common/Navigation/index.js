import {
  StyledNav,
  StyledNavItem,
  StyledNavLink,
  StyledNavList,
} from "./styled";

const Navigation = () => (
  <StyledNav>
    <StyledNavList>
      <StyledNavItem>
        <StyledNavLink to="/Tasks">Lista Zadań</StyledNavLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledNavLink to="/AboutMe">O mnie</StyledNavLink>
      </StyledNavItem>
    </StyledNavList>
  </StyledNav>
);

export default Navigation;
