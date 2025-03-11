import styled from "styled-components";
import RedirectButton from "../../Buttons/RedirectButton";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ItemProjectStyled = styled.li`
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid var(--bg-tec);
  border-radius: 20px;
  background: var(--bg-card);
  transition: box-shadow 0.3s ease;
  overflow: hidden;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  }

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

  .description {
    color: var(--text);
    font-size: 0.9em;
    height: 2em;
    line-height: 1.4;
    margin-bottom: 1em;
  }
`;

const LinkCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 200;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: var(--dest);
  }

  a {
    color: var(--dest);
    font-size: 14px;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default function ItemProject({ filter, project }) {
  const id = project.id;
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: `.${id}`,
        stiffness: 100,
        damping: 20,
      }}
    >
      <ItemProjectStyled>
        <div className="image">
          <img src={project.image} alt={project.title} />
        </div>
        <p className="description">{project.shortDescription}</p>
        <LinkCard>
          <Link to={`proj/${project.id}`}>
            Mais detalhes
          </Link>{" "}
          <RedirectButton
            icon={<FontAwesomeIcon icon={faArrowUpRightFromSquare} />}
            href={project.website}
          >
            Visitar site
          </RedirectButton>
        </LinkCard>
      </ItemProjectStyled>
    </motion.div>
  );
}
