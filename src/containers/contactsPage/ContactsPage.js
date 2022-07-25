import React, { useState, useEffect } from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import TileList from "../../components/tileList/TileList";
// name,
//   setName,
//   phone,
//   setPhone,
//   email,
//   setEmail,
//   handleSubmit
export const ContactsPage = (props) => {
  const { contacts, handleContacts } = props;

  //variables
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  //check duplicate
  const [duplicate, setDuplicate] = useState(false);

  useEffect(() => {
    const foundDuplicate = contacts.find((contact) => contact === name);
    if (name) {
      setDuplicate(true);
    }
  }, [name]);
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if (!duplicate) {
      handleContacts(name, email, phone);
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
