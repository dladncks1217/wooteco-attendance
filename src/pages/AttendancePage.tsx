import { useCallback, useState } from "react";
import styled from "styled-components";
import Modal from "../components/Modal";
import Attendance from "../components/Attendance";
import ViewAttendance from "../components/ViewAttendance";

const AttendancePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [attendanceModalOpen, setAttendanceModalOpen] = useState(false);

  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handleAttendanceModalOpen = useCallback(() => {
    setAttendanceModalOpen(true);
  }, [setAttendanceModalOpen]);

  const handleAttendanceModalClose = useCallback(() => {
    setAttendanceModalOpen(false);
  }, [setAttendanceModalOpen]);

  const mockDataList = [
    { date: "5월 19일" },
    { date: "5월 20일" },
    { date: "5월 21일" },
    { date: "5월 22일" },
    { date: "5월 23일" },
    { date: "5월 24일" },
    { date: "5월 25일" },
    { date: "5월 26일" },
    { date: "5월 27일" },
  ].reverse();

  return (
    <StyledAttendanceSection>
      <StyledAttendanceList>
        <StyledAttendanceAddItem onClick={handleAttendanceModalOpen}>
          <button type="button">+</button>
        </StyledAttendanceAddItem>
        {mockDataList.map((mockData) => {
          return (
            <StyledAttendanceItem key={mockData.date} onClick={handleModalOpen}>
              <div>{mockData.date}</div>
            </StyledAttendanceItem>
          );
        })}
      </StyledAttendanceList>
      {attendanceModalOpen && (
        <Modal handleModalClose={handleAttendanceModalClose}>
          <Attendance modalClose={handleAttendanceModalClose} />
        </Modal>
      )}
      {isModalOpen && (
        <Modal handleModalClose={handleModalClose}>
          <ViewAttendance />
        </Modal>
      )}
    </StyledAttendanceSection>
  );
};

const StyledAttendanceSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 0;
`;

const StyledAttendanceList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  overflow: auto;
`;

const StyledAttendanceAddItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 84px;
  border-radius: 5px;
  background-color: #333333;

  & > button {
    background-color: #ffffff;
    border-radius: 50%;
    font-size: 24px;
    width: 36px;
    height: 36px;
  }
`;

const StyledAttendanceItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  height: 84px;
  border-radius: 5px;
  background-color: #333333;
  color: #ffffff;
  font-size: 24px;
  & > button {
    color: #ffffff;
  }
  & > button:hover {
    cursor: pointer;
  }
`;

export default AttendancePage;
