import React from "react";

export const ContactPicker = (props) => {
  const { onChange, contacts } = props;
  console.log(contacts);
  return (
    <select onChange={onChange}>
      <option defaultValue={""}></option>
      {contacts.map((contact) => (
        <option>{contact}</option>
      ))}
    </select>
  );
};
