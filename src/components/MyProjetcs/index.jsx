import styled from "styled-components";
import DataProjects from "@/data/DataProjects";
import ItemProject from "./itemProject";
import ActionButton from "../Buttons/ActionButton";

const MyProjectsStyled = styled.section`
  max-height: 100vh;
  ul {
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default function MyProjects() {
  return (
    <MyProjectsStyled>
      <div className="layout">
        <h1 className="title">
          Projetos em <strong className="dest">Destaque</strong>
        </h1>
        <ul>
          {DataProjects.projetos
            .filter((project) => project.featured)
            .map((project) => (
              <ItemProject key={project.id} project={project} />
            ))}
        </ul>
        <ActionButton>Ver Mais</ActionButton>
      </div>
    </MyProjectsStyled>
  );
}
