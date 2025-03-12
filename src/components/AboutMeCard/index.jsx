import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faBookOpen,
  faBriefcase,
  faBuilding,
  faDesktop,
  faServer,
  faDatabase,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import { faReact, faJs } from "@fortawesome/free-brands-svg-icons";
import Illustration from "../Illustration";

const AboutMeCardStyled = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: 25em;
  .title_text {
    @media (max-width: 1000px) {
      display: flex;
      text-align: center;
      width: 100%;
      flex-direction: column;
    }
  }
  @media (max-width: 1000px) {
    display: flex;
    margin: 4em 0;
    gap: 1em;
    align-items: center;
    flex-direction: column;
  }
`;

const ListContentStyled = styled.div`
  border-radius: 20px;
  padding: 10px;
  line-height: 1.4;
  border: 1px solid var(--dest);

  ul {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 15px 20px;
    background-color: var(--bg-card);
    gap: 0.5em;
    @media (max-width: 1000px) {
      text-align: initial;
    }
  }

  li {
    .content {
      display: flex;
      align-items: initial;
      .icon_content {
        margin: 1.55em 1.5em 0 0;
        font-size: 5px;
        color: transparent;
        border: 1px solid var(--dest);
        border-radius: 10px;
      }
    }
  }
`;

export default function AboutMeCard({ item }) {
  const [dimensions, setDimensions] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setDimensions(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(dimensions);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-150px" });

  return (
    <AboutMeCardStyled ref={sectionRef}>
      {" "}
      {item.id === 2 && dimensions >= 1000 && (
        <Illustration
          circle={true}
          icon1={<FontAwesomeIcon icon={faDatabase} />}
          icon2={<FontAwesomeIcon icon={faServer} />}
          icon3={<FontAwesomeIcon icon={faBookOpen} />}
        />
      )}
      <motion.div
        className="title_text"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
      >
        <h1 className="title">
          {item.title}
          <strong className="dest">{item.dest}</strong>
        </h1>
        <ListContentStyled>
          <ul>
            {item.content.map((contet, index) => {
              return (
                <li key={index}>
                  <div className="content">
                    <FontAwesomeIcon className="icon_content" icon={faCircle} />
                    {contet}
                  </div>
                </li>
              );
            })}
          </ul>
        </ListContentStyled>
      </motion.div>
      {item.id === 2 && dimensions <= 1000 && (
        <Illustration
          circle={true}
          icon1={<FontAwesomeIcon icon={faDatabase} />}
          icon2={<FontAwesomeIcon icon={faServer} />}
          icon3={<FontAwesomeIcon icon={faBookOpen} />}
        />
      )}
      {item.id === 1 && (
        <Illustration
          icon1={<FontAwesomeIcon icon={faReact} />}
          icon2={<FontAwesomeIcon icon={faJs} />}
          icon3={<FontAwesomeIcon icon={faCode} />}
        />
      )}
      {item.id === 3 && (
        <Illustration
          icon1={<FontAwesomeIcon icon={faBriefcase} />}
          icon2={<FontAwesomeIcon icon={faBuilding} />}
          icon3={<FontAwesomeIcon icon={faDesktop} />}
        />
      )}
    </AboutMeCardStyled>
  );
}
