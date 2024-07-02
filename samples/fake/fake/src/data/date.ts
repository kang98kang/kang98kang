import { DateTime } from "luxon";

//가짜 시간 만들기. <= Date 객체로
export const makeRandomPastDate = () => {
  const value = new Date().valueOf();
  const n = 100000;
  return new Date(value - Math.floor(Math.random() * n * n));
};

export const makeRelativeDate = (date: Date) =>
  DateTime.fromJSDate(date).startOf("day").toRelative();

export const randomRelativeDate = () => makeRelativeDate(makeRandomPastDate());

export const makeDayMonthYear = (date: Date) =>
  DateTime.fromJSDate(date).toLocaleString(DateTime.DATETIME_FULL);

export const randomDayMonthYear = () => makeDayMonthYear(makeRandomPastDate());
