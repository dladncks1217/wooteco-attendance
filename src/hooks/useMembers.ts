import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { memberListState } from "../recoil/members";
import { firstMember, Member } from "../types/member";
import { ORIGIN } from "../utils/constants/constants";

const useMembers = () => {
  const [members, setMembers] = useRecoilState(memberListState);

  const onChangeMemberState = useCallback(
    (memberId: number, status: number) => {
      setMembers(
        members.map((member) => {
          if (memberId === member.memberId) {
            return {
              ...member,
              attendance: status,
            };
          }
          return member;
        })
      );
    },
    [members, setMembers]
  );

  const fetchAllMembers = useCallback(async () => {
    const response = await fetch(`${ORIGIN}/members`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = (await response.json()) as firstMember[];
    const crews = result.map((crew) => {
      return { memberId: crew.id, memberName: crew.name, attendance: 0 };
    });
    setMembers(crews);
  }, [setMembers]);

  const fetchDateMembers = useCallback(
    async (date: string) => {
      const response = await fetch(`${ORIGIN}/attendance-records/${date}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();

      setMembers(result);
    },
    [setMembers]
  );

  const fetchAttendance = useCallback(async (members: Member[]) => {
    await fetch(`${ORIGIN}/attendance-records`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(members),
    });
  }, []);

  return {
    fetchAllMembers,
    fetchDateMembers,
    fetchAttendance,
    onChangeMemberState,
  };
};

export default useMembers;
