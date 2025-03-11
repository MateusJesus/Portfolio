import Technologies from "@/components/Technologies";
import Introduction from "@/components/Introduction";
import MyProjects from "../../components/MyProjetcs";
import styled from "styled-components";
import { motion } from "framer-motion";
import perfil from "@/assets/perfil.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


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
`;

export default function HomePage() {
  return (
    <>
      <Introduction>
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
            <p>
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
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                className="link"
                href="https://github.com/MateusJesus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                className="link"
                href="https://www.linkedin.com/in/mateus-jesus-256a89241/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
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
      </Introduction>
      <Technologies />
      <MyProjects title="Projetos " dest="em destaque" filter={true} />;
    </>
  );
}
