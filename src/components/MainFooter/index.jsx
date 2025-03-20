import styled from "styled-components";
import background_footer from "/assets/background_footer.svg";
import logo from "/assets/logo.png";
import { Link, useLocation } from "react-router";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { PiDownloadSimpleBold } from "react-icons/pi";

const FooterBackground = styled.img`
  width: 100%;
  display: block;
  user-select: none;
`;

const MainFooterStyled = styled.footer`
  hr {
    margin: 0;
    border: none;
    border-bottom: solid 1px var(--color-hr);
  }
  background-color: var(--bg-tec);

  .button {
    display: flex;
    justify-content: end;
    align-items: center;
    .downloadicon {
      margin-left: 0.3em;
    }
    .action_button {
      display: flex;
      align-items: center;
      padding: 0.5em 1em;
      background: none;
      font-weight: 400;
      margin: auto;
      cursor: pointer;
      color: var(--dest);
      border: 1px solid var(--dest);
      border-radius: 10px;
      text-align: center;
      transition: box-shadow 0.3s ease-in-out, color 0.3s ease-in-out,
        background-color 0.3s ease-in-out;
    }
    .action_button:hover {
      box-shadow: 0 0 10px var(--destOP);
      color: var(--bg-card);
      background-color: var(--dest);
    }
  }
`;

const TalkMeStyled = styled.div`
  text-align: center;
  padding: 3em;
  .title {
    text-transform: none;
  }
`;

const FooterContactStyled = styled.div`
  align-items: center;
  justify-content: center;
  padding: 1em 0;
  display: grid;
  grid-template-columns: 1fr 50% 1fr;

  img {
    height: 3em;
  }

  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .title {
      margin-bottom: 1em;
      font-weight: 300;
      font-size: 12px;
      text-transform: none;
      color: var(--white);
    }

    ul {
      display: flex;
      align-items: center;
      gap: 0.5em;
    }
    li {
      display: flex;
      flex-direction: column;
      font-weight: 200;
      font-size: 12px;
      gap: 0.3em;
      color: var(--text-color);
      .item_icon_text {
        display: flex;
        align-items: center;
        line-height: 1em;
      }
    }

    .footerIconSocial {
      margin-right: 0.3em;
      font-size: 15px;
    }
  }
  @media (max-width: 1000px) {
    gap: 1em;
    display: flex;
    flex-direction: column;
    padding: 1em 0;
    img {
      display: none;
    }
    .contact {

      .title {
        font-size: 13px;
      }
      ul {
        display: flex;
        flex-direction: column;
        align-items: initial;
        justify-content: center;
        gap: 1px;
      }
      li {
        margin: 0;
        gap: 5px;
        display: flex;
        flex-direction: column;
        justify-content: initial;
      }
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
                <div className="item_icon_text">
                  <FaEnvelope className="footerIconSocial" />
                  mateus191019@gmail.com
                </div>
                <div className="item_icon_text">
                  <FaPhoneAlt className="footerIconSocial" />
                  (69) 9 92948489
                </div>
              </li>
              <li>
                <div className="item_icon_text">
                  <FaLinkedin className="footerIconSocial" />
                  <a
                    href="http://linkedin.com/in/mateus-jesus-256a89241"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    linkedin.com/in/mateus-jesus-256a89241
                  </a>
                </div>
                <div className="item_icon_text">
                  <FaGithub className="footerIconSocial" />
                  <a
                    href="http://github.com/mateusjesus"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/mateusjesus
                  </a>{" "}
                </div>
              </li>
            </ul>
          </div>
          <div className="button">
            <a href="/curriculo.pdf" download>
              <div className="action_button">
                Baixar Currículo
                <PiDownloadSimpleBold className="downloadicon" />
              </div>
            </a>
          </div>
        </FooterContactStyled>
      </MainFooterStyled>
    </>
  );
}
