import { useState } from "react";
import { validateMonthIndex as validate } from "../utils";

export function useMonth(index, year) {
  const [month, setMonth] = useState({index: validate(index), year});

  function prevMonth() {
    month.index == 0 ? setMonth({ index: 11, year: month.year - 1 })
    : setMonth({ index: month.index - 1, year: month.year });
  }
  function nextMonth() {
    month.index >= 11 ? setMonth({ index: 0, year: month.year + 1 })
    : setMonth({ index: month.index + 1, year: month.year });
  }

  function prevYear() {
    setMonth({ index: month.index, year: month.year - 1 });
  }

  function nextYear() {
    setMonth({ index: month.index, year: month.year + 1 });
  }

  const setMonthUtils = {
    prev: prevMonth,
    next: nextMonth
  }

  const setYearUtils = {
    prev: prevYear,
    next: nextYear 
  }

  return [month, setMonthUtils, setYearUtils];
}
