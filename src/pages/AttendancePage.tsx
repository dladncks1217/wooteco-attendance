import { useCallback, useState } from "react";
import Modal from "../components/Modal";
import Calender from "../components/Calender";
import Attendance from "../components/Attendance";
import ViewAttendance from "../components/ViewAttendance";

const AttendancePage = () => {
  const [clickDate, setClickDate] = useState("");
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

  return (
    <>
      <Calender
        setClickDate={setClickDate}
        onClickToday={handleAttendanceModalOpen}
        onClickPrevDay={handleModalOpen}
      />
      {attendanceModalOpen && (
        <Modal handleModalClose={handleAttendanceModalClose}>
          <Attendance modalClose={handleAttendanceModalClose} />
        </Modal>
      )}
      {isModalOpen && (
        <Modal handleModalClose={handleModalClose}>
          <ViewAttendance clickDate={clickDate} />
        </Modal>
      )}
    </>
  );
};

export default AttendancePage;
