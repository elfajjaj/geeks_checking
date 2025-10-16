import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDay } from "../redux/plannerActions";

const CalendarPicker = () => {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.selectedDay);

  return (
    <div>
      <h2>📅 Select a Day</h2>
      <input
        type="date"
        value={selectedDay}
        onChange={(e) => dispatch(selectDay(e.target.value))}
      />
    </div>
  );
};

export default CalendarPicker;
