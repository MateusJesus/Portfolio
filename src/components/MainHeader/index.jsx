import styled from "styled-components";
import logo from "../../assets/logo.png";
import NavButton from "../Buttons/NavButton";
import { Link } from "react-router";

const HeaderStyled = styled.header`
  .cab {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 2.5em;
  }

  .logo {
    max-height: 2.5em;
  }

  .NavButtons {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default function MainHeader() {
  return (
    <HeaderStyled>
      <nav className="cab">
        <Link to="/">
          <img className="logo" src={logo} alt="Logo Mateus" />
        </Link>
        <ul className="NavButtons">
          <li>
            <NavButton path="/" text="Introdução" />
          </li>
          <li>
            <NavButton path="/my-projects" text="Meus Projetos" />
          </li>
          <li>
            <NavButton path="/about-me" text="Sobre Mim" />
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
}
