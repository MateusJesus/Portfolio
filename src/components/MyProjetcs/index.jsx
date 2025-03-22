import styled from "styled-components";
import ItemProject from "./itemProject";
import ActionButton from "../Buttons/ActionButton";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MyProjectsStyled = styled.section`
  padding: 95px 0;
  ul {
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 1000px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`;

const ButtonStyled = styled.div`
  margin: 2em 0 0 0;
  display: flex;
  font-size: 18px;
  align-items: center;
  justify-content: center;
`;

const Message = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.error ? "red" : "white")};
`;

export default function MyProjects({ title, dest, filter }) {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const API_URL = "https://portfolio-api-production-c2ff.up.railway.app";
  useEffect(() => {
    fetch(API_URL+"/api-get", {
      method: "GET",
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

  return (
    <MyProjectsStyled>
      <div className="layout">
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

        {loading ? (
          <Message>
            {" "}
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
            <h1>Falha ao carregar projetos. Tente novamente mais tarde.</h1> :(
          </Message>
        ) : (
          <>
            <ul>
              {(filter
                ? projects.filter((project) => project.featured)
                : projects
              ).map((project, index) => (
                <ItemProject
                  filter={filter}
                  key={index}
                  project={project}
                />
              ))}
            </ul>
            {filter && (
              <ButtonStyled onClick={() => window.scrollTo({ top: 0 })}>
                <ActionButton link="/projects">Ver Mais</ActionButton>
              </ButtonStyled>
            )}
          </>
        )}
      </div>
    </MyProjectsStyled>
  );
}
