import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";

const RedirectButtonStyled = styled.div`
  display: flex;
  align-items: end;
  justify-content: end;
  position: relative;

  button {
    all: unset;
    display: inline-block;
    cursor: pointer;
    border: none;
    background: none;
    outline: none;
    box-shadow: none;
  }

  .redirect_icon {
    z-index: 1;
    padding: 0.5em;
    font-size: 14px;
    cursor: pointer;
    color: var(--dest);
    border: 1px solid var(--dest);
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-left: auto;
    position: relative;
    right: 0;

    .redirect_text {
      user-select: none;
      right: -1px;
      height: 1em;
      padding: 0.5em 1em;
      font-size: 14px;
      font-weight: 400;
      cursor: pointer;
      color: var(--dest);
      border: 1px solid var(--dest);
      border-radius: 30px;
      white-space: nowrap;
      width: 0em;
      position: absolute;

      .text {
        opacity: 0;
      }
    }
  }
`;

export default function RedirectButton({ type, icon, href, children }) {
  const [showText, setShowText] = useState(false);

  return (
    <RedirectButtonStyled>
      {type ? (
        <button type={type} target="_blank" rel="noopener noreferrer">
          <motion.div
            className="redirect_icon"
            whileHover={{
              boxShadow: "0 0 10px var(--destOP)",
              color: "var(--bg-card)",
              backgroundColor: "var(--dest)",
            }}
            transition={{ duration: 0.3 }}
            onHoverEnd={() => setShowText(false)}
          >
            <motion.div
              className="redirect_text"
              initial={{ width: "0em" }}
              whileHover={{ width: "6.5em" }}
              transition={{
                duration: 0.2,
                type: "spring",
                stiffness: 130,
                damping: 20,
              }}
              onHoverStart={() => setShowText(true)}
            >
              {showText && (
                <motion.div
                  className="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.2,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                >
                  {children}
                </motion.div>
              )}
            </motion.div>
            {icon}
          </motion.div>
        </button>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer">
        <motion.div
          className="redirect_icon"
          whileHover={{
            boxShadow: "0 0 10px var(--destOP)",
            color: "var(--bg-card)",
            backgroundColor: "var(--dest)",
          }}
          transition={{ duration: 0.3 }}
          onHoverEnd={() => setShowText(false)}
        >
          <motion.div
            className="redirect_text"
            initial={{ width: "0em" }}
            whileHover={{ width: "6.5em" }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 130,
              damping: 20,
            }}
            onHoverStart={() => setShowText(true)}
          >
            {showText && (
              <motion.div
                className="text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
              >
                {children}
              </motion.div>
            )}
          </motion.div>
          {icon}
        </motion.div>
      </a>
      )}
    </RedirectButtonStyled>
  );
}
