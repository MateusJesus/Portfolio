import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const IllustrationStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 155px;
  width: 180px;
  margin: auto;
  position: relative;

  .icon1,
  .icon2,
  .icon3 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--dest);
    font-size: 40px;
    border: 1px var(--dest) solid;
    height: 80px;
    width: 80px;
    position: absolute;
  }

  .icon1 {
    left: 0px;
  }

  .icon2 {
    right: 0;
    bottom: 0;
  }

  .icon3 {
    height: 55px;
    width: 55px;
    font-size: 20px;
    top: 0;
    right: 24px;
  }
`;

export default function Illustration({ icon1, icon2, icon3 }) {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { margin: "-100px" });

  return (
    <IllustrationStyled ref={sectionRef}>
      <motion.div
        className="icon1"
        initial={{
          borderRadius: 0,
          opacity: 0,
          x: 10,
        }}
        animate={
          isInView
            ? {
                borderRadius: 20,
                opacity: 1,
                x: 0,
              }
            : {
                borderRadius: 0,
                opacity: 0,
                x: 10,
              }
        }
        transition={{
          duration: 0.5,
          delay: 0.3,
        }}
      >
        {icon1}
      </motion.div>
      <motion.div
        className="icon2"
        initial={{
          borderRadius: 0,
          opacity: 0,
          x: -15,
        }}
        animate={
          isInView
            ? {
                borderRadius: 20,
                opacity: 1,
                x: 0,
              }
            : {
                borderRadius: 0,
                opacity: 0,
                x: -15,
              }
        }
        transition={{
          duration: 0.5,
          delay: 0.1,
        }}
      >
        {icon2}
      </motion.div>{" "}
      <motion.div
        className="icon3"
        initial={{
          borderRadius: 0,
          opacity: 0,
          x: -15,
          y: 10,
        }}
        animate={
          isInView
            ? {
                borderRadius: 15,
                opacity: 1,
                x: 0,
                y: 0,
              }
            : {
                borderRadius: 0,
                opacity: 0,
                x: -15,
                y: 10,
              }
        }
        transition={{
          duration: 0.5,
          delay: 0.2,
        }}
      >
        {icon3}
      </motion.div>
    </IllustrationStyled>
  );
}
