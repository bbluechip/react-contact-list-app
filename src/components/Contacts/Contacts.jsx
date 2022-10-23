import React, { useState } from "react";
import Form from "./form/Form";
import List from "./list/List";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullname: "John Doe",
      phone_number: "12335",
    },
    {
      fullname: "Dennis Villenue",
      phone_number: "123213",
    },
    {
      fullname: "Orhan Berk",
      phone_number: "12235",
    },
  ]);

  return (
    <div>
      Contacts
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
};

export default Contacts;
