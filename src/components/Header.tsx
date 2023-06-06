import styled from "styled-components";

const Header = () => {
  return (
    <StyledHeader>
      <div>출석체크</div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  letter-spacing: 15px;
  font-size: 26px;
  width: 100vw;
  height: 80px;
  padding: 9px;
  background-color: #04c09e;
  color: #ffffff;
`;

export default Header;
