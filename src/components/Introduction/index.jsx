import styled from "styled-components";
import logo from "../../assets/logo.png";
import NavButton from "../Buttons/NavButton";

const HeaderStyled = styled.header`
  .cab {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 2.5em;
  }

  .cab a {
    margin: 0em 0em 0em 4em;
  }

  .logo {
    max-height: 2.5em;
  }
`;

export default function MainHeader() {
  return (
    <HeaderStyled>
      <nav className="cab">
        <NavButton>
          <img className="logo" src={logo} alt="Logo Mateus" />
        </NavButton>
        <div>
          <NavButton location="my-projects">Meus Projetos</NavButton>
        </div>
      </nav>
    </HeaderStyled>
  );
}
