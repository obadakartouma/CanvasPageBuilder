import React from "react";
import { useRecoilState } from "recoil";
import { Contact as contact } from "../../../services/atoms";

function Contacts() {
  const [contacts, setContacts] = useRecoilState(contact);

  const makeNewContact = (e) => {
    setContacts((prev) => ({
      ...prev,
      contacts: [
        ...prev.contacts,
        {
          profilePicture: "",
          name: "",
          email: "",
        },
      ],
    }));
    e.preventDefault();
  };

  const itemChanged = ({ target: { value, name } }, index) => {
    let items = [...contacts.contacts];

    let item = { ...items[index] };

    item[name] = value;

    items[index] = item;
    setContacts((prev) => ({
      ...prev,
      contacts: items,
    }));
  };

  const deleteContact = (index) => {
    let items = [...contacts.contacts];
    if (index !== -1) {
      items.splice(index, 1);
      setContacts((prev) => ({
        ...prev,
        contacts: items,
      }));
    }
  };

  function contactItem({ profilePicture, name, email }, index) {
    return (
      <div className="contactItemWrapper">
        <input
          type="text"
          className="eInputLearningObjectives"
          name="profilePicture"
          value={profilePicture}
          onChange={(value) => itemChanged(value, index)}
          placeholder="Profile Picture Url"
        />
        <input
          type="text"
          onChange={(value) => itemChanged(value, index)}
          className="eInputLearningObjectives"
          value={name}
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          onChange={(value) => itemChanged(value, index)}
          className="eInputLearningObjectives"
          value={email}
          name="email"
          placeholder="Email"
        />
        <div className="DeletebuttonIcon" onClick={() => deleteContact(index)}>
          Delete
        </div>
      </div>
    );
  }

  return (
    <div className="eHeaderContainer footerMargin">
      <div className="header">Contacts</div>
      <div className="courseItemsWrapper">
        {contacts.contacts.map((item, index) => {
          return contactItem(item, index);
        })}
      </div>
      <button className="itemsButton" onClick={makeNewContact}>
        New Item
      </button>
    </div>
  );
}

export default Contacts;
