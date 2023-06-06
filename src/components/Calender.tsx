import React, { useState } from "react";
import styled from "styled-components";

interface CalendarProps {
  onClickToday: () => void;
  onClickPrevDay: () => void;
  setClickDate: React.Dispatch<React.SetStateAction<string>>;
}

const Calendar = ({
  onClickToday,
  onClickPrevDay,
  setClickDate,
}: CalendarProps) => {
  const [date, setDate] = useState(new Date());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderDays = () => {
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstDayIndex = firstDay.getDay(); // 첫 번째 날짜의 요일 인덱스

    const lastDay = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    const prevLastDay = new Date(
      date.getFullYear(),
      date.getMonth(),
      0
    ).getDate();
    const lastDayIndex = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDay();
    const nextDays = 7 - lastDayIndex - 1;

    const today = new Date(); // 오늘 날짜

    let days = [];

    for (let x = firstDayIndex; x > 0; x--) {
      days.push(<div className="prev-month-date">{prevLastDay - x + 1}</div>);
    }

    for (let i = 1; i <= lastDay; i++) {
      const isToday =
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        i === today.getDate();

      const isPrev =
        (date.getFullYear() === today.getFullYear() &&
          date.getMonth() === today.getMonth() &&
          today.getDate() > i) ||
        date.getMonth() < today.getMonth();

      days.push(
        <div
          className={isToday ? "today" : isPrev ? "prev-day" : ""}
          onClick={
            isToday
              ? onClickToday
              : isPrev
              ? () => {
                  const prevDate = `${date.getFullYear()}-${
                    date.getMonth() + 1 < 10
                      ? "0" + (date.getMonth() + 1)
                      : date.getMonth() + 1
                  }-${i < 10 ? "0" + i : i}`;

                  setClickDate(prevDate);
                  onClickPrevDay();
                }
              : undefined
          }
        >
          {<span className="spanDay">{i}</span>}
        </div>
      );
    }

    for (let j = 1; j <= nextDays; j++) {
      days.push(<div className="next-date">{j}</div>);
    }

    return days;
  };
  return (
    <CalendarWrapper>
      <MonthWrapper>
        <i
          onClick={() => setDate(new Date(date.setMonth(date.getMonth() - 1)))}
        >
          &#10094;
        </i>
        <DateWrapper>
          <h1>{months[date.getMonth()]}</h1>
        </DateWrapper>
        <i
          onClick={() => setDate(new Date(date.setMonth(date.getMonth() + 1)))}
        >
          &#10095;
        </i>
      </MonthWrapper>

      <WeekdaysWrapper>
        <div>Sun</div>
        <div>Mon</div>
        <div>Tue</div>
        <div>Wed</div>
        <div>Thu</div>
        <div>Fri</div>
        <div>Sat</div>
      </WeekdaysWrapper>
      <DaysWrapper>{renderDays()}</DaysWrapper>
    </CalendarWrapper>
  );
};
const CalendarWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  padding: 120px 0;
  font-size: 20px;
`;

const MonthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  i {
    font-size: 1.5em;
    cursor: pointer;
  }
`;

const DateWrapper = styled.div`
  h1 {
    font-size: 1.8em;
    text-transform: capitalize;
    margin: 0;
  }
`;

const WeekdaysWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  div {
    width: calc(100% / 7);
    text-align: center;
    text-transform: uppercase;
    font-size: 0.8em;
    border-bottom: 1px solid #ddd;
    padding-bottom: 5px;
  }
`;

const DaysWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    width: calc(100% / 7);
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: flex-end;
    padding: 5px;
    box-sizing: border-box;
  }

  .today .spanDay {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    background-color: #04c09e;
    color: white;
    cursor: pointer;
  }

  .prev-day .spanDay {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    background-color: #333333;
    color: white;
    cursor: pointer;
  }

  div.prev-month-date,
  div.next-date {
    color: #aaa;
  }
`;

export default Calendar;
