import { Link, useLocation } from "react-router";
import styled from "styled-components";

const NavButtonStyled = styled.div`
  color: var(--white);

  .nav_button {
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
  }

  .active {
    color: var(--dest);
    text-shadow: 0 0 0.125em rgba(0, 0, 0, 0.5), 0 0 0.25em currentColor;
    transition: text-shadow 0.3s ease-in-out, color 0.3s ease-in-out;
  }
`;

export default function NavButton({ path, children }) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <NavButtonStyled>
      <Link className={`nav_button ${isActive && "active"}`} to={path}>
        {children}
      </Link>
    </NavButtonStyled>
  );
}
