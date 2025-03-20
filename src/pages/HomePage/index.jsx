import Technologies from "@/components/Technologies";
import Introduction from "@/components/Introduction";
import MyProjects from "../../components/MyProjetcs";
import styled from "styled-components";
import { motion } from "framer-motion";
import perfil from "/assets/perfilAboutMe.png";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const HomepageStyled = styled.div`
  .introduction {
    min-height: 100vh;
    display: grid;
    gap: 4em;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    @media (max-width: 1000px) {
      .text {
        font-size: 18px;
      }
      margin: 5em 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column-reverse;
    }
  }
`;

const SocialStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1em;
  gap: 1em;

  .link {
    width: 1em;
    height: 1em;
    padding: 0.2em;
    border-radius: 100%;
    border: solid 2px var(--text-color);
    color: var(--text-color);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    text-shadow: 0 0 0.125em rgba(0, 0, 0, 0.5), 0 0 0.25em currentColor;
    transition: box-shadow 0.2s ease-in-out, COLOR 0.2s ease-in-out,
      BORDER 0.2s ease-in-out;
  }

  .link:hover {
    border: solid 2px var(--dest);
    color: var(--dest);
    box-shadow: 0 0 10px var(--destOP);
  }

  @media (max-width: 1000px) {
    justify-content: center;
  }
`;

export default function HomePage() {
  return (
    <HomepageStyled>
      <Introduction>
        <div className="introduction">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <div>
              <h1 className="title">
                DESENVOLVEDOR <strong className="dest">FRONTEND</strong>
              </h1>
              <p className="text">
                Olá! Meu nome é Mateus de Jesus, tenho 20 anos e estou estudando
                programação há mais de um ano com o objetivo de me tornar um
                desenvolvedor Front-end!
              </p>
              <SocialStyled className="contato">
                <a
                  className="link"
                  href="https://wa.me/5569992948489"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp />
                </a>
                <a
                  className="link"
                  href="https://github.com/MateusJesus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="link"
                  href="https://www.linkedin.com/in/mateus-jesus-256a89241/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </SocialStyled>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              delay: 0.1,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <div>
              <img src={perfil} alt="Imagem de perfil " />
            </div>
          </motion.div>
        </div>
      </Introduction>
      <Technologies />
      <MyProjects title="Projetos " dest="em destaque" filter={true} />
    </HomepageStyled>
  );
}
