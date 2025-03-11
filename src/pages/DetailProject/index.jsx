import Modal from "../../components/Modal";
import RedirectButton from "../../components/Buttons/RedirectButton";
import DataProjects from "@/data/DataProjects";
import DataTechnologies from "@/data/DataTechnologies";
import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  faArrowUpRightFromSquare,
  faDatabase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faPhp,
  faGithub,
  faBootstrap,
  faFigma,
  faReact
} from "@fortawesome/free-brands-svg-icons";

const getIcon = (name) => {
  const icons = {
    faReact: faReact,
    faHtml5: faHtml5,
    faCss3Alt: faCss3Alt,
    faJs: faJs,
    faPhp: faPhp,
    faDatabase: faDatabase,
    faBootstrap: faBootstrap,
    faCode: faCode,
    faFigma: faFigma,
  };
  return icons[name] ? <FontAwesomeIcon icon={icons[name]} /> : null;
};

const DetailProjectStyled = styled.div`
  border-radius: 20px;
  padding: 20px;
  background-color: var(--bg);
  color: var(--text-color);

  .image {
    box-shadow: 0 0 5px var(--dest);
    padding: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--dest);
    border-radius: 10px;
    margin-bottom: 1em;
    overflow: hidden;
  }

  .image img {
    max-width: 100%;
    border-radius: 5px;
    max-height: 100%;
    object-fit: cover;
  }

  .text_project {
    margin-bottom: 0.5em;
    .title {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--white);
    }
  }

  .details_project {
    display: flex;
    align-items: initial;
    justify-content: space-between;

    span {
      font-size: 11px;
      font-weight: 100;
      color: var(--white);
      text-transform: uppercase;
    }
  }

  .actions_project {
    display: flex;
    justify-content: space-between;
    align-items: end;

    .redirect {
      gap: 5px;
      flex-direction: column;
      display: flex;
      align-items: end;
    }

    a {
      color: var(--dest);
      font-weight: 200;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }
  }
`;

const ListTecStyled = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.4em;
  li {
    img {
      height: 0.6em;
      width: 0.6em;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 18px;
    height: 1.5em;
    width: 1.5em;
    background-color: var(--bg-card);
  }
`;

export default function DetailProject() {
  const [usedTec, setUsedTec] = useState([]);
  const { id } = useParams();

  const project = DataProjects.projetos.find(
    (project) => project.id === Number(id)
  );

  useEffect(() => {
    if (project) {
      const technologies = project.tec
        .map((tecId) => DataTechnologies.tec.find((item) => item.id === tecId))
        .filter(Boolean);
      setUsedTec(technologies);
    }
  }, [project]);

  return (
    <Modal>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <DetailProjectStyled>
          <div>
            {project ? (
              <>
                <div className="image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div>
                  <div className="text_project">
                    <h1 className="title">{project.title}</h1>
                    <p>{project.description}</p>
                  </div>
                  <div className="details_project">
                    <div>
                      <span>Tecnologias usadas</span>
                      <ListTecStyled>
                        {usedTec.map((tech) => (
                          <li key={tech.id}>{getIcon(tech.icon)}</li>
                        ))}
                      </ListTecStyled>
                    </div>
                    <div>
                      <span>Produção do projeto</span>
                      <br />
                      <span>{project.duration || "N/A"}</span>
                    </div>
                  </div>
                  <div className="actions_project">
                    <Link to={-1}>Voltar</Link>
                    <div className="redirect">
                      <RedirectButton
                        icon={<FontAwesomeIcon icon={faGithub} />}
                        href={project.github}
                      >
                        GitHub
                      </RedirectButton>
                      <RedirectButton
                        icon={
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        }
                        href={project.website}
                      >
                        Visitar site
                      </RedirectButton>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div>
                <div className="text_project">
                  <h1 className="title">Projeto não encontrado.</h1>
                  <p>Nenhum projeto foi encontrado :(</p>
                </div>
                <div className="actions_project">
                  <Link to={-1}>Voltar</Link>
                </div>
              </div>
            )}
          </div>
        </DetailProjectStyled>
      </motion.div>
    </Modal>
  );
}
