import { useCallback } from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import useMembers from "../hooks/useMembers";
import { memberListState } from "../recoil/members";
import CrewItem from "./CrewItem";

interface AttendanceProps {
  modalClose: () => void;
}

const Attendance = ({ modalClose }: AttendanceProps) => {
  const memberList = useRecoilValue(memberListState);
  const { fetchAllMembers, fetchAttendance, editMemberList } = useMembers();

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const DateText = `${year}-${month > 10 ? month : "0" + month}-${
    date > 10 ? date : "0" + date
  }`;

  const { isLoading } = useQuery("memberList", fetchAllMembers);

  const handleFetchPost = useCallback(() => {
    fetchAttendance(memberList);
    modalClose();
  }, [fetchAttendance, modalClose, memberList]);

  const handleFetchEdit = useCallback(() => {
    editMemberList();
    modalClose();
  }, [editMemberList, modalClose]);

  return (
    <StyledAttendance>
      <StyledAttendanceHeader>{DateText}</StyledAttendanceHeader>
      <StyledCrewList>
        {isLoading
          ? "로딩중"
          : memberList.map((crew) => (
              <CrewItem key={crew.memberId} crew={crew} isDisabled={false} />
            ))}
      </StyledCrewList>
      <StyledSubmitFlexBox>
        <StyledSubmit onClick={handleFetchPost}>제츨</StyledSubmit>
        <StyledSubmit onClick={handleFetchEdit}>수정</StyledSubmit>
      </StyledSubmitFlexBox>
    </StyledAttendance>
  );
};

const StyledAttendance = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
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
  align-items: center;
  gap: 10px;
  width: 100%;
  overflow: scroll;
`;

const StyledSubmitFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const StyledSubmit = styled.button`
  width: 45%;
  heigth: 60px;
  padding: 5px;
  border-radius: 5px;
  background-color: #333333;
  color: white;
  transition: all 0.2s ease-in;
  :hover {
    background-color: #575757;
  }
`;

export default Attendance;
