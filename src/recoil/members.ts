import { atom } from "recoil";
import { Member } from "../types/member";

export const memberListState = atom<Member[]>({
  key: "memberList",
  default: [],
});
