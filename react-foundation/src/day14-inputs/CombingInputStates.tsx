import React, { useState, type ChangeEvent } from "react";

export default function CombingInputStates() {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    bio: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const newContact = { ...contact, [name]: value };
    setContact(newContact);
  };

  return (
    <form>
      <h3>Contact Info Form</h3>
      <div>
        <label>
          First name:
          <input
            name="firstName"
            value={contact.firstName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Last name:
          <input
            name="lastName"
            value={contact.lastName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          phone:
          <input name="phone" value={contact.phone} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          email:
          <input name="email" value={contact.email} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          bio:
          <input name="bio" value={contact.bio} onChange={handleChange} />
        </label>
      </div>
    </form>
  );
}
