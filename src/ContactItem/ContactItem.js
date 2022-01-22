import React from "react";

import { ContactItem, ContactInfo, DeleteButton } from "./ContactItem.styled";

const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <ContactItem>
      <ContactInfo>
        {contact.name}:{contact.number}
      </ContactInfo>
      <DeleteButton type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </DeleteButton>
    </ContactItem>
  );
};

export default ContactListItem;
