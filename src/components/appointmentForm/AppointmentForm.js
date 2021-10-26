import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="title">Title:</label>
      <input type="text" name="title" title={title} />
      <label for="date">Date:</label>
      <input type="date" name="date" date={date} min={getTodayString()}/>
      <label for="time">Time:</label>
      <input type="time" name="time" time={time} />

      <ContactPicker contacts={contacts}/>
      
      <input type="submit" />

    </form>
  );
};
