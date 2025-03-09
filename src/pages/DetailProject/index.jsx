import { Link, Outlet, Route, Routes, useParams } from "react-router";
import DataProjects from "@/data/DataProjects";
import Modal from "../../components/Modal";
import styled from "styled-components";
import { motion } from "framer-motion";
import RedirectButton from "../../components/Buttons/RedirectButton";

const DetailProjectStyled = styled.div`
  border-radius: 20px;
  padding: 20px;
  background-color: var(--bg);
  color: var(--text-color);
  max-width: 600px;
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
      margin: 0;
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--white);
    }
  }

  .details_project {
    display: flex;
    align-items: center;
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
    align-items: center;
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

export default function DetailProject() {
  const param = useParams();
  const projects = DataProjects.projetos.find((project) => {
    return project.id === Number(param.id);
  });

  console.log(param);
  return (
    <Modal>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
        }}
      >
        <DetailProjectStyled>
          <div>
            <div className="image">
              <img src={projects.image} alt="" srcset="" />
            </div>
            <div>
              <div className="text_project">
                {" "}
                <h1 className="title">{projects.title}</h1>
                <p>{projects.description}</p>
              </div>
              <div className="details_project">
                <div>
                  <span>tecnologias usadas</span>
                  <ListTecStyled>
                    <li>i</li>
                    <li>i</li>
                    <li>i</li>
                  </ListTecStyled>
                </div>
                <div>
                  <span>tempo de projeto</span>
                  <div>xxx</div>
                </div>
              </div>
              <div className="actions_project">
                <Link to={-1}>Voltar</Link>
                <div>
                  <RedirectButton href={projects.github}>Git hub</RedirectButton>
                  <RedirectButton>Visitar site</RedirectButton>
                </div>
              </div>
            </div>
          </div>
        </DetailProjectStyled>
      </motion.div>
    </Modal>
  );
}
