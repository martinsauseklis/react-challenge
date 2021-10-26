import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label for="name">Name:</label>
      <input type="text" name="name" />
      <label for="phone">Phone:</label>
      <input type="tel" pattern="^[2-9]\d{2}-\d{3}-\d{4}$" name="phone" />
      <label for="email">Email:</label>
      <input type="email" name="email" />
      <input type="submit" value="Submit form" />


    </form>
  );
};
