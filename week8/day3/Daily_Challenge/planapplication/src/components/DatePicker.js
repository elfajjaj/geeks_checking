import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectDay } from "../features/planner/plannerSlice";

function DatePicker() {
  const dispatch = useDispatch();
  const selectedDay = useSelector((state) => state.planner.selectedDay);

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="date"
        value={selectedDay}
        onChange={(e) => dispatch(selectDay(e.target.value))}
        style={{
          padding: "8px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
}

export default DatePicker;
