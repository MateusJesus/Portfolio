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
  position: fixed;
  z-index: 3;
  top: 0;
  bottom: 0;
  background-color: transparent;
  border: none;
`;

const Modal = ({ children }) => {
  const navigate = useNavigate();
  const onClose = () => {
    navigate(-1);
  };

  return (
    <>
      <Overlay onClick={onClose}/>
        <Dialog open>{children}</Dialog>
    </>
  );
};

export default Modal;
