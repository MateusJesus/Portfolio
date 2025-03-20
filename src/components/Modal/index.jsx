import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2;
`;

const Dialog = styled.dialog`
  padding: 0;
  width: 550px;
  max-height: 100vh;
  position: fixed;
  z-index: 3;
  top: 0;
  bottom: 0;
  background-color: transparent;
  border: none;
  @media (max-width: 1000px) {
    width: 90vw;
  }
`;

const Modal = ({ children, stopClose }) => {
  const navigate = useNavigate();

  const onClose = () => {
    stopClose ? null : navigate(-1);
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <Dialog open>{children}</Dialog>
    </>
  );
};

export default Modal;
