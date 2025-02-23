import { Link, useLocation } from "react-router";
import styled from "styled-components";

const NavButtonStyled = styled.p`
  margin: 0em 0em 0em 4em;
  color: var(--dest);
  text-shadow: 0 0 0.125em rgba(0, 0, 0, 0.5), 0 0 0.25em currentColor;

  .button {
    cursor: pointer;
    position: relative;
    border: none;
    background: none;
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 400ms;
    transition-property: color;
  }

  .button:focus,
  .button:hover {
    color: var(--white);
  }

  .button:focus:after,
  .button:hover:after {
    width: 100%;
    left: 0%;
  }

  .button:after {
    content: "";
    pointer-events: none;
    bottom: -2px;
    left: 50%;
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: var(--white);
    transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
    transition-duration: 200ms;
    transition-property: width, left;
  }

  .active {
    color: var(--white);
  }
`;

export default function NavButton({ path, text }) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <NavButtonStyled>
      <Link to={path}>
        <span className={`button ${isActive && "active"}`}>{text}</span>
      </Link>
    </NavButtonStyled>
  );
}
