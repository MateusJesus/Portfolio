import Modal from "../../components/Modal";
import RedirectButton from "../../components/Buttons/RedirectButton";
import DataTechnologies from "@/data/DataTechnologies";
import { Link, useParams } from "react-router";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaDatabase,
  FaBootstrap,
  FaFigma,
  FaGithub,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

const getIcon = (name) => {
  const icons = {
    FaReact: <FaReact />,
    FaHtml5: <FaHtml5 />,
    FaCss3Alt: <FaCss3Alt />,
    FaJs: <FaJs />,
    FaPhp: <FaPhp />,
    FaDatabase: <FaDatabase />,
    FaBootstrap: <FaBootstrap />,
    VscVscode: <VscVscode />,
    FaFigma: <FaFigma />,
  };
  return icons[name] || null;
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
    .title {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--white);
    }
  }

  .details_project {
    margin: 0.8em 0.3em;
    .details_title {
      span {
        color: #ffffff64;
      }
    }

    .details_title,
    .details_content {
      margin-bottom: 0.2em;
      display: flex;
      align-items: initial;
      justify-content: space-between;

      .duration_content {
        padding: 5px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        height: 1.5em;
        background-color: var(--bg-card);
      }
    }

    span {
      font-size: 11px;
      font-weight: 100;
      color: var(--white);
      text-transform: uppercase;
    }

    @media (max-width: 1000px) {
      flex-direction: column;
      margin: 1em 0.3em .5em .3em;

      .details_title,
      .details_content {
        display: flex;
        flex-direction: column;

        .duration_content_title {
          margin-top: 0.6em;
          color: #ffffff64;
        }

        .duration_content {
          padding: 5px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          width: auto;
          height: 1.5em;
          width: 12em;
          background-color: var(--bg-card);
        }
      }
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

const Message = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.error ? "red" : "white")};
`;

export default function DetailProject() {
  const [dimensions, setDimensions] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDimensions(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [usedTec, setUsedTec] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const projectId = Number(id);
  const project = projects.find((project) => project.id === projectId);

  const API_URL = "https://portfolio-api-qdsy.onrender.com";
  useEffect(() => {
    fetch(API_URL + "/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-PASSWORD": "q1w2e3r4t5",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar projetos");
        return res.json();
      })
      .then((data) => {
        setProjects(data.projects);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

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
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <DetailProjectStyled>
          <AnimatePresence mode="wait">
            {loading ? (
              <Message>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <motion.div
                    className="iconsPostSent"
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      border: "4px solid var(--bg-tec)",
                      borderTopColor: "var(--dest)",
                      willChange: "transform",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.div>
              </Message>
            ) : error ? (
              <Message error>
                {" "}
                <div>
                  <div className="text_project">
                    <h1 className="title">Projeto não encontrado.</h1>
                  </div>
                  <div className="actions_project">
                    <Link to={-1}>Voltar</Link>
                  </div>
                </div>
              </Message>
            ) : (
              <>
                <div className="image">
                  <img
                    src={`https://lh3.googleusercontent.com/d/${project.image}`}
                    alt={project.title}
                  />
                </div>
                <div>
                  <div className="text_project">
                    <h1 className="title">{project.title}</h1>
                    <p>{project.description}</p>
                  </div>
                  {dimensions >= 1000 ? (
                    <div className="details_project">
                      <div className="details_title">
                        {" "}
                        <span>Tecnologias usadas</span>
                        <span>Produção do projeto</span>
                      </div>
                      <div className="details_content">
                        <ListTecStyled>
                          {usedTec.map((tech) => (
                            <li key={tech.id}>{getIcon(tech.icon)}</li>
                          ))}
                        </ListTecStyled>
                        <span className="duration_content">
                          {project.duration || "N/A"}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="details_project">
                      <div className="details_title">
                        {" "}
                        <span>Tecnologias usadas</span>
                        <ListTecStyled>
                          {usedTec.map((tech) => (
                            <li key={tech.id}>{getIcon(tech.icon)}</li>
                          ))}
                        </ListTecStyled>
                      </div>
                      <div className="details_content">
                        <span className="duration_content_title">
                          Produção do projeto
                        </span>
                        <span className="duration_content">
                          {project.duration || "N/A"}
                        </span>
                      </div>
                    </div>
                  )}
                  <div className="actions_project">
                    <Link to={-1}>Voltar</Link>
                    <div className="redirect">
                      <RedirectButton icon={<FaGithub />} href={project.github}>
                        GitHub
                      </RedirectButton>
                      <RedirectButton
                        icon={<FaArrowUpRightFromSquare />}
                        href={project.website}
                      >
                        Visitar site
                      </RedirectButton>
                    </div>
                  </div>
                </div>
              </>
            )}
          </AnimatePresence>
        </DetailProjectStyled>
      </motion.div>
    </Modal>
  );
}
