import styled from "styled-components";

const mockData = {
  date: "2023년 5월 28일",
  crewList: [
    { crew: "아커", isAttendance: false },
    { crew: "슬링키", isAttendance: true },
    { crew: "도기", isAttendance: false },
    { crew: "오리", isAttendance: true },
    { crew: "에밀", isAttendance: true },
  ],
};

const Attendance = () => {
  const handleAttendanced = () => {
    console.log("출석완료");
  };

  const handleUnAttendanced = () => {
    console.log("결석완료");
  };

  return (
    <StyledAttendance>
      <StyledAttendanceHeader>{mockData.date}</StyledAttendanceHeader>
      <StyledCrewList>
        {mockData.crewList.map((crewData) => {
          return (
            <StyledCrewItem isAttendance={crewData.isAttendance}>
              {crewData.crew}
              <div>
                <AttendanceButton type="button" onClick={handleAttendanced}>
                  출석
                </AttendanceButton>
                <UnAttendanceButton type="button" onClick={handleUnAttendanced}>
                  결석
                </UnAttendanceButton>
              </div>
            </StyledCrewItem>
          );
        })}
      </StyledCrewList>
    </StyledAttendance>
  );
};

const StyledAttendance = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  height: 100%;
  border: 1px solid #dddddd;
  border-radius: 5px;
`;

const StyledAttendanceHeader = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  border-radius: 5px;
  color: #ffffff;
  font-size: 20px;
`;

const StyledCrewList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  overflow: scroll;
`;

const StyledCrewItem = styled.li<Record<"isAttendance", boolean>>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;
  border-radius: 5px;
  background-color: #ffffff;

  padding: 0 10px;

  color: ${(props) => (props.isAttendance ? "green" : "red")};
  & > div {
    display: flex;
    gap: 5px;
  }
`;

const AttendanceButton = styled.button`
  color: #ffffff;
  background-color: green;
  border-radius: 3px;
  padding: 8px;
  letter-spacing: 3px;
  text-align: center;
`;

const UnAttendanceButton = styled.button`
  color: #ffffff;
  background-color: red;
  border-radius: 3px;
  padding: 8px;
  letter-spacing: 3px;
  text-align: center;
`;

export default Attendance;
