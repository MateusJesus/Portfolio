import styled from "styled-components";
import DataProjects from "@/data/DataProjects";
import ItemProject from "./itemProject";
import ActionButton from "../Buttons/ActionButton";
import { motion } from "framer-motion";

const MyProjectsStyled = styled.section`
  padding: 95px 0;
  ul {
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ButtonStyled = styled.div`
  margin: 2em 0 0 0;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
`;

export default function MyProjects({ title, dest, filter }) {
  return (
    <MyProjectsStyled>
      <div className="layout">
        {" "}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{
            duration: 2,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
        >
          <h1 className="title">
            {title} <strong className="dest">{dest}</strong>
          </h1>
        </motion.div>
        <ul>
          {(filter
            ? DataProjects.projetos.filter((project) => project.featured)
            : DataProjects.projetos
          ).map((project) => (
            <ItemProject key={project.id} project={project} />
          ))}
        </ul>
        {filter && (
          <ButtonStyled
            onClick={() => {
              window.scrollTo({ top: 0 });
            }}
          >
            <ActionButton link="/projects">Ver Mais</ActionButton>
          </ButtonStyled>
        )}
      </div>
    </MyProjectsStyled>
  );
}
