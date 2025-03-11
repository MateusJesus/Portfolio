import styled from "styled-components";
import background1 from "/assets/background_tec-top.svg";
import background2 from "/assets/background_tec-bottom.svg";
import DataTechnogies from "@/data/DataTechnologies";
import ItemTec from "./itemTec";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TechnologiesStyled = styled.section`
  background-color: var(--dest);
  margin: 0;
  position: relative;

  .tecnologias {
    margin: auto;
    padding: 12em 0;
    font-family: var(--ff-tec);
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 300;
    display: flex;
    max-width: 1080px;
    flex-direction: column;
    align-items: initial;
  }

  .tecnologias .title {
    color: var(--bg);
    font-weight: 400;
  }

  .lista {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }

  .tec_background1,
  .tec_background2 {
    position: absolute;
    width: 100%;
    user-select: none;
  }
`;

const TecBackground = styled.img`
  width: 100%;
  user-select: none;
`;

export default function Technologies() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  return (
    <>
      <TechnologiesStyled ref={sectionRef}>
        <motion.div
          initial={{ y: -15 }}
          animate={isInView ? { y: 0 } : { y: -15 }}
          transition={{ duration: 1 }}
        >
          <TecBackground className="tec_background1" src={background1} />
        </motion.div>
        <motion.div
          className="tecnologias"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animação inversa ao sair
          transition={{ duration: 1, type: "spring", stiffness: 80 }}
        >
          <h1 className="title">Minhas tecnologias</h1>
          <ul className="lista">
            {DataTechnogies.tec.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <ItemTec technologies={item} />
              </motion.div>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ y: -100 }}
          animate={isInView ? { y: -116 } : { y: -100 }}
          transition={{ duration: 1 }}
        >
          <TecBackground className="tec_background2" src={background2} />
        </motion.div>
      </TechnologiesStyled>
    </>
  );
}
