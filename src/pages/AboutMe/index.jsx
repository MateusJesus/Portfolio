import perfil from "/assets/perfil.png";
import Introduction from "@/components/Introduction";
import DataAboutMe from "@/data/DataAboutMe";
import { motion } from "framer-motion";
import styled from "styled-components";
import AboutMeCard from "../../components/AboutMeCard";

const IntroductionStyled = styled.div`
  .introduction {
    min-height: 100vh;
    display: grid;
    gap: 4em;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    @media (max-width: 1000px) {
      .text{
       font-size: 19px; 
      }
      margin: 5em 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

export default function AboutMe() {
  return (
    <IntroductionStyled className="layout">
      <Introduction>
        <div className="introduction">
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
              <img src={perfil} alt="Imagem de perfil" />
            </div>
          </motion.div>
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
                Tenho 20 anos e sou um desenvolvedor Front-End há mais de um
                ano. Minha jornada na tecnologia começou como Motion Designer,
                criando animações e experiências visuais para marcas e projetos
                criativos, e atualmente estou em transição para a área de
                Programação Front-End.
                <br />
                <br />
                Desde então, venho me dedicando ao desenvolvimento web, com foco
                em construir interfaces modernas, responsivas e interativas.
                Tenho uma sólida base em desenvolvimento web e conhecimento
                básico em programação Back-End.
              </p>
            </div>
          </motion.div>
        </div>
      </Introduction>
      <ul>
        {DataAboutMe?.aboutMe?.map((item) => (
          <AboutMeCard key={item.id} item={item} />
        ))}
      </ul>
    </IntroductionStyled>
  );
}
