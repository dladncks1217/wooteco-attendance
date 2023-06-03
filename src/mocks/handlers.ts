import { rest } from "msw";
import { Member } from "../types/member";

const members = [
  { id: 1, name: "오리" },
  { id: 2, name: "아커" },
  { id: 3, name: "슬링키" },
  { id: 4, name: "에밀" },
  { id: 5, name: "도기" },
];

let attendanceRecords = [
  {
    memberId: 1,
    memberName: "오리",
    attendance: 0, // 출석
  },
  {
    memberId: 2,
    memberName: "에밀",
    attendance: 1, // 결석
  },
  {
    memberId: 3,
    memberName: "도기",
    attendance: 2, // 지각
  },
];

export const handlers = [
  rest.get("/members", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(members));
  }),

  rest.get("/attendance-records/:date", (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(500), ctx.json(attendanceRecords));
  }),

  rest.put("/attendance-records", (req, res, ctx) => {
    return res(ctx.status(204), ctx.delay(500));
  }),

  rest.post<Member[]>("/attendance-records", (req, res, ctx) => {
    const datas = req.body;

    const attendanceDatas = datas.map((data) => {
      const member = members.find((member) => member.id === data.memberId);

      return { ...member, ...data };
    });

    attendanceRecords = attendanceDatas;

    return res(ctx.status(201), ctx.delay(500));
  }),
];
