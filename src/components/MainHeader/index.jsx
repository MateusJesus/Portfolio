import styled from "styled-components";
import logo from "/assets/logo.png";
import NavButton from "../Buttons/NavButton";
import { Link, Outlet, useLocation } from "react-router";
import ActionButton from "../Buttons/ActionButton";
import { motion } from "framer-motion";

const HeaderStyled = styled.header`
  z-index: 2;
  font-weight: 300;
  user-select: none;
  height: 70px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  backdrop-filter: blur(10px);
  background-color: rgba(36, 36, 36, 0.7);
  border-bottom: solid var(--color-hr) 1px;

  .cab {
    max-width: 1080px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo {
    max-height: 2.5em;
  }

  .NavButtons {
    display: flex;
    align-items: center;
    position: relative;
    gap: 3em;
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      height: 70px;
      cursor: pointer;
    }
  }

  .slider {
    position: absolute;
    bottom: 0px;
    height: 2px;
    width: 100%;
    box-shadow: 0 0 10px var(--dest);
    background: var(--dest);
  }
`;

const ButtonStyled = styled.div`
  display: flex;
  font-size: 16px;
`;

export default function MainHeader() {
  const navPages = [
    { path: "/", text: "Página inicial" },
    { path: "/about-me", text: "Sobre Mim" },
    { path: "/projects", text: "Projetos" },
  ];
  const location = useLocation();

  return (
    <>
      <HeaderStyled>
        <nav className="cab">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo Mateus" />
          </Link>
          <ul className="NavButtons">
            {navPages.map((item, index) => (
              <NavButton
                key={index}
                path={item.path}
                className={location.pathname === item.path ? "active" : ""}
              >
                <li>
                  {item.text}
                  {location.pathname === item.path ? (
                    <motion.div
                      className="slider"
                      layoutId="underline"
                      transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                      }}
                      style={{ transform: "none" }}
                    />
                  ) : (
                    ""
                  )}
                </li>
              </NavButton>
            ))}
          </ul>
          <ButtonStyled>
            <ActionButton
              link={
                location.pathname === "/"
                  ? "/contact"
                  : location.pathname + "/contact"
              }
            >
              Contate-me
            </ActionButton>
          </ButtonStyled>
        </nav>
      </HeaderStyled>
      <Outlet />
    </>
  );
}
