import { ChangeEvent, useCallback, useState } from "react";
import { Member } from "../types/member";
import styled from "styled-components";
import Select from "./Select";
import useMembers from "../hooks/useMembers";

const OPTIONS = ["출석", "결석", "지각", "병결", "예비군", "기타"];
const COLOR: Record<string, string> = {
  0: "green",
  1: "#E71837",
  2: "#FF6F00",
  3: "#FF6F00",
  4: "#FF6F00",
  5: "#FF6F00",
};

interface CrewItemProp {
  crew: Member;
  isDisabled: boolean;
}

const CrewItem = ({ crew, isDisabled }: CrewItemProp) => {
  const { onChangeMemberState } = useMembers();
  const [color, setColor] = useState("green");

  const nameColorChangeHandler = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;

      onChangeMemberState(crew.memberId, Number(value));

      return setColor(COLOR[value]);
    },
    [crew.memberId, onChangeMemberState]
  );

  return (
    <StyledCrewItem key={crew.memberId} color={color}>
      {crew.memberName}
      <Select
        options={OPTIONS}
        onChange={nameColorChangeHandler}
        isDisabled={isDisabled}
      />
    </StyledCrewItem>
  );
};

const StyledCrewItem = styled.li<Record<"color", string>>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 60px;
  border-radius: 5px;
  background-color: #ffffff;

  padding: 0 40px;

  color: ${({ color }) => color};

  & > div {
    display: flex;
    gap: 5px;
    margin-top: 20px;
  }
`;

export default CrewItem;
