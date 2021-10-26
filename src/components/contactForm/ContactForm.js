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
      <input type="text" name="name"  onChange={(e) => setName(e.target.value)} value={name}/>
      <label for="phone">Phone:</label>
      <input type="tel" pattern="^[2-9]\d{2}-\d{3}-\d{4}$" name="phone"  onChange={(e) => setPhone(e.target.value)} value={phone}/>
      <label for="email">Email:</label>
      <input type="email" name="email"  onChange={(e) => setEmail(e.target.value)} value={email}/>
      <input type="submit" value="Submit form" />


    </form>
  );
};
