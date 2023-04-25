import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.secondaryColor};
  text-decoration: none;

  &.active {
    font-weight: 700;
  }
`;

export const StyledNav = styled.nav`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  background: ${({ theme }) => theme.color.primaryColor};
  padding: 10px;
  z-index: 1;
`;

export const StyledNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    gap: 3px;
    flex-direction: column;
  }
`;

export const StyledNavItem = styled.li`
  transition: 0s;

  &:hover {
    transform: scale(1.05);
  }
`;
