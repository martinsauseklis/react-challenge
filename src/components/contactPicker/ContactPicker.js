import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option key={-1} >Nothing selected</option>
      {contacts.map((contact, index) => {
        return (
          <option selected="selected" key={contact} value={contact}>{contact}</option>
        );
      })}
    </select>
  );
};
