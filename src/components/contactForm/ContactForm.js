import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={name}
          name="name"
          onChange={onChangeName}
          required
          placeholder="Contact Name"
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          value={phone}
          name="number"
          pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          required
          placeholder="Contact Phone (###-###-####)"
          onChange={onChangePhone}
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          value={email}
          name="email"
          onChange={onChangeEmail}
          required
          placeholder="Contact Email"
        />
      </label>
      <br />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
