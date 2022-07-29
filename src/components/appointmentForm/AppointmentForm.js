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
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    const contact = contacts.map((contact) => contact.name);
    return contact;
  };
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeContact = (e) => {
    setContact(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeTime = (e) => {
    setTime(e.target.value);
  };
  return (
    <form action="#" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={title}
          name="title"
          onChange={onChangeTitle}
          required
          placeholder="Enter the title"
        ></input>
      </label>
      <br />
      <label>
        <ContactPicker
          name="contact"
          value={contact}
          onChange={onChangeContact}
          placeholder="Appointment With"
          contacts={getContactNames()}
        />
      </label>
      <br />
      <label>
        <input
          type="date"
          value={date}
          name="date"
          min={getTodayString()}
          onChange={onChangeDate}
          required
        />
      </label>
      <br />
      <label>
        <input
          type="time"
          value={time}
          name="time"
          onChange={onChangeTime}
          required
        />
      </label>
      <br />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
