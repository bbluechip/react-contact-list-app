import React, { useState } from "react";
import Form from "./form/Form";
import List from "./list/List";
import "./styles.css";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <div className="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
};

export default Contacts;
