import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          <strong>{contact.name}</strong><br />
          Phone: {contact.phone}<br />
          Email: {contact.email}
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
