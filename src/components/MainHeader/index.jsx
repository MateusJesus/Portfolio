import styled from "styled-components";
import logo from "/assets/logo.png";
import NavButton from "../Buttons/NavButton";
import { Link, Outlet, useLocation } from "react-router";
import ActionButton from "../Buttons/ActionButton";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

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
  border-bottom: solid var(--color-hr) 1px;
  .header-blur {
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    background-color: rgba(36, 36, 36, 0.7);
    z-index: -1;
  }

  .blur {
    backdrop-filter: blur(10px);
    background-color: rgba(36, 36, 36, 0.7);
  }

  .cab {
    padding: 0 2em;
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
      height: 70px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }

  .slider {
    position: absolute;
    bottom: 0px;
    height: 2px;
    width: 100%;
    @media (max-width: 1000px) {
      width: 2px;
      height: 10px;
      background: var(--dest);
    }
  }

  @media (max-width: 1000px) {
    .cab {
      padding: 0 0 0 2em;
      max-width: 1080px;
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .menu {
      position: relative;
      .menu_icon {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 70px;
        width: 70px;
      }
      .menu_links {
        right: 0;
        text-align: center;
        position: fixed;
        display: block;
        width: 150px;
        top: 70px;
        li {
          padding-right: 1em;
          display: flex;
          justify-content: end;
          align-items: center;
          height: 40px;
        }
      }
    }

    .slider {
      position: absolute;
      top: 0px;
      right: 0px;
      width: 2px;
      height: 40px;
      background: var(--dest);
    }
  }
`;

const ButtonStyled = styled.div`
  display: flex;
  font-size: 16px;
`;

export default function MainHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dimensions, setDimensions] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDimensions(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navPages = [
    { path: "/", text: "Página inicial" },
    { path: "/about-me", text: "Sobre Mim" },
    { path: "/projects", text: "Projetos" },
  ];
  const location = useLocation();

  return (
    <>
      <HeaderStyled>
        <div className="header-blur"></div>
        <nav className="cab">
          <Link to="/">
            <img className="logo" src={logo} alt="Logo Mateus" />
          </Link>
          {dimensions >= 1000 ? (
            <>
              <ul className="NavButtons">
                {navPages.map((item, index) => (
                  <NavButton
                    key={index}
                    path={item.path}
                    className={location.pathname === item.path ? "active" : ""}
                  >
                    <li>
                      {" "}
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
                      {item.text}
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
            </>
          ) : (
            <div className="menu">
              <div
                onClick={() => setMenuOpen(!menuOpen)}
                className={`menu_icon`}
              >
                <FontAwesomeIcon icon={faBars} />
                <AnimatePresence initial={false}>
                  {menuOpen && (
                    <motion.div
                      className="menu_icon"
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        zIndex: -1,
                        top: 0,
                        backgroundColor: "var(--bg-card)",
                        position: "absolute",
                      }}
                      transition={{
                        duration: 0.2,
                        type: "spring",
                        stiffness: 150,
                        damping: 20,
                      }}
                    />
                  )}
                </AnimatePresence>
              </div>
              <>
                <AnimatePresence initial={false}>
                  {menuOpen && (
                    <motion.div
                      className="menu_links"
                      initial={{ x: 100 }}
                      exit={{ x: 200 }}
                      animate={{ x: 0 }}
                      transition={{
                        duration: 0.2,
                        type: "spring",
                        stiffness: 150,
                        damping: 20,
                      }}
                    >
                      <ul
                        className="blur"
                        onClick={() => setMenuOpen(!menuOpen)}
                      >
                        {navPages.map((item, index) => (
                          <NavButton
                            key={index}
                            path={item.path}
                            className={
                              location.pathname === item.path ? "active" : ""
                            }
                          >
                            <li>{item.text}</li>{" "}
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
                          </NavButton>
                        ))}
                        <NavButton
                          path={
                            location.pathname === "/"
                              ? "/contact"
                              : location.pathname + "/contact"
                          }
                        >
                          <li>Contate-me</li>
                        </NavButton>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            </div>
          )}
        </nav>
      </HeaderStyled>
      <Outlet />
    </>
  );
}
