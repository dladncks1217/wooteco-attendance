import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import useMembers from "../hooks/useMembers";
import { memberListState } from "../recoil/members";
import CrewItem from "./CrewItem";

interface ViewAttendanceProps {
  clickDate: string;
}

const ViewAttendance = (props: ViewAttendanceProps) => {
  const { clickDate } = props;
  const memberList = useRecoilValue(memberListState);
  const { fetchDateMembers } = useMembers();

  const { isLoading } = useQuery("attendance-record", () => {
    fetchDateMembers(clickDate);
  });

  return (
    <StyledAttendance>
      <StyledAttendanceHeader>{clickDate}</StyledAttendanceHeader>
      <StyledCrewList>
        {isLoading
          ? "로딩중"
          : memberList.map((crew) => (
              <CrewItem key={crew.memberId} crew={crew} isDisabled={true} />
            ))}
      </StyledCrewList>
      <StyledSubmitFlexBox></StyledSubmitFlexBox>
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

export default ViewAttendance;
