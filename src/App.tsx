import styled from "styled-components";
import Header from "./components/Header";
import AttendancePage from "./pages/AttendancePage";

function App() {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledSideLayout />
        <AttendancePage />
        <StyledSideLayout />
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  section {
    width: 70%;
    height: 100vh;
    margin-top: 60px;
  }
`;

const StyledSideLayout = styled.div`
  width: 15%;
  height: 100vh;
`;

export default App;
