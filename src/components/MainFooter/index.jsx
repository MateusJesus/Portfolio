import styled from "styled-components";
import background_footer from "/assets/background_footer.svg";
import logo from "/assets/logo.png";
import { Link, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const FooterBackground = styled.img`
  width: 100%;
  display: block;
  user-select: none;
`;

const MainFooterStyled = styled.footer`
  hr {
    border: none;
    border-bottom: solid 1px var(--color-hr);
  }
  background-color: var(--bg-tec);
`;

const TalkMeStyled = styled.div`
  text-align: center;
  padding: 3em;
  .title {
    text-transform: none;
  }
`;

const FooterContactStyled = styled.div`
  display: flex;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  img {
    height: 3em;
  }

  .contact {
    margin: 1em 0;
    .title {
      margin-bottom: 5px;
      font-weight: 300;
      font-size: 12px;
      text-transform: none;
      color: var(--white);
    }

    li {
      font-weight: 200;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      font-size: 12px;
      color: var(--text-color);
    }

    .footerIconSocial {
      margin-right: 0.3em;
      font-size: 13px;
    }
  }
`;

export default function MainFooter() {
  const location = useLocation();
  return (
    <>
      <FooterBackground src={background_footer} />
      <MainFooterStyled>
        <TalkMeStyled className="layout">
          <h1 className="title">Vamos contruir algo juntos?</h1>
          <p>
            Estou disponível para colaborações, freelas ou oportunidades de
            <br />
            trabalho,{" "}
            <Link
              to={
                location.pathname === "/"
                  ? "/contact"
                  : location.pathname + "/contact"
              }
              className="dest"
            >
              entre em contato comigo!
            </Link>
          </p>
        </TalkMeStyled>
        <hr />{" "}
        <FooterContactStyled className="layout">
          <img src={logo} alt="logo do site, verde, com formato de 'M' e 'J'" />
          <div className="contact">
            <h2 className="title">Entre em contato comigo!</h2>
            <ul>
              <li>
                <FontAwesomeIcon
                  className="footerIconSocial"
                  icon={faEnvelope}
                />
                mateus191019@gmail.com
              </li>
              <li>
                <FontAwesomeIcon className="footerIconSocial" icon={faPhone} />
                (69) 9 92948489
              </li>
              <li>
                <FontAwesomeIcon className="footerIconSocial" icon={faGithub} />
                <a
                  href="http://github.com/mateusjesus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/mateusjesus
                </a>
              </li>
              <li>
                <FontAwesomeIcon
                  className="footerIconSocial"
                  icon={faLinkedin}
                />{" "}
                <a
                  href="http://linkedin.com/in/mateus-jesus-256a89241"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/mateus-jesus-256a89241
                </a>
              </li>
            </ul>
          </div>
        </FooterContactStyled>
      </MainFooterStyled>
    </>
  );
}
