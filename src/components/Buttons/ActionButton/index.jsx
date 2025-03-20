import { Link } from "react-router";
import styled from "styled-components";
import { motion } from "framer-motion";

const ActionButtonStyled = styled.div`
  .action_button {
    padding: 0.5em 1em;
    background: none;
    font-weight: 400;
    margin: auto;
    cursor: pointer;
    color: var(--dest);
    border: 1px solid var(--dest);
    border-radius: 10px;
    text-align:center;
  }
`;

export default function ActionButton({ children, link }) {
  return (
    <Link to={link}>
      <ActionButtonStyled>
        <motion.div
          className="action_button"
          whileHover={{
            boxShadow: "0 0 10px var(--destOP)",
            color: "var(--bg-card)",
            backgroundColor: "var(--dest)",
          }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </ActionButtonStyled>
    </Link>
  );
}
