import styled from "styled-components";

interface ModalProps {
  handleModalClose: () => void;
  children: JSX.Element;
}

const Modal = (props: ModalProps) => {
  const { handleModalClose, children } = props;

  return (
    <>
      <StyledBackdrop onClick={handleModalClose} />
      <StyledModal>{children}</StyledModal>;
    </>
  );
};

const StyledBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #333333;
  animation:viewBackdrop 0.5s ease-out forwards;
  @keyframes viewBackdrop{
    0%{
       opacity:0; 
    }
    100%{
        opacity: 0.8;
    }
`;

const StyledModal = styled.div`
  position: fixed;
  width: 400px;
  height: 500px;
  top: 50%;
  left: 50%;
  background-color: #dddddd;
  transform: translate(-50%, -50%);
  animation: viewModal 0.5s;
  border-radius: 5px;

  @keyframes viewModal {
    0% {
      transform: translate(-50%, 0%);
    }
    100% {
      transform: translate(-50%, -50%);
    }
  }
`;

export default Modal;
