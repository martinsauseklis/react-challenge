import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option key={-1} >Nothing selected</option>
      {contacts.map((el, index) => {
        return (
          <option selected="selected" key={index} value={el}>{el.name}</option>
        );
      })}
    </select>
  );
};
