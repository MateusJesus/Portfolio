import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";
import {
  FaCircle,
  FaBookOpen,
  FaBriefcase,
  FaBuilding,
  FaDesktop,
  FaServer,
  FaDatabase,
  FaCode,
  FaReact,
  FaJs,
} from "react-icons/fa6";
import Illustration from "../Illustration";

const AboutMeCardStyled = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: 25em;

  @media (max-width: 1000px) {
    display: flex;
    margin: 4em 0;
    gap: 1em;
    align-items: center;
    flex-direction: column;
    .title_text {
      display: flex;
      text-align: center;
      width: 100%;
      flex-direction: column;
    }
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
      display: grid;
      grid-template-columns: 1fr 100%;
      .icon_content {
        display: block;
        margin: 8px 10px 0 0;
        font-size: 5px;
        color: transparent;
        border: var(--dest) solid 1px;
        border-radius: 10px;
      }
    }
  }
`;

export default function AboutMeCard({ item }) {
  const [dimensions, setDimensions] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setDimensions(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-150px" });

  return (
    <AboutMeCardStyled ref={sectionRef}>
      {item.id === 2 && dimensions >= 1000 && (
        <Illustration
          circle={true}
          icon1={<FaDatabase />}
          icon2={<FaServer />}
          icon3={<FaBookOpen />}
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
            {item.content.map((content, index) => (
              <li key={index}>
                <div className="content">
                  <FaCircle className="icon_content" />
                  {content}
                </div>
              </li>
            ))}
          </ul>
        </ListContentStyled>
      </motion.div>
      {item.id === 2 && dimensions <= 1000 && (
        <Illustration
          circle={true}
          icon1={<FaDatabase />}
          icon2={<FaServer />}
          icon3={<FaBookOpen />}
        />
      )}
      {item.id === 1 && (
        <Illustration icon1={<FaReact />} icon2={<FaJs />} icon3={<FaCode />} />
      )}
      {item.id === 3 && (
        <Illustration
          icon1={<FaBriefcase />}
          icon2={<FaBuilding />}
          icon3={<FaDesktop />}
        />
      )}
    </AboutMeCardStyled>
  );
}
