import React from "react";
import { useRecoilValue } from "recoil";
import { Contact as contact } from "../../../services/atoms";

function Contacts() {
  const contacts = useRecoilValue(contact);

  function contactItem({ profilePicture, name, email }) {
    return (
      <div className="vContactWrapper">
        <div className="vContactleft">
          <img src={profilePicture} className="vHeaderImage" />
        </div>
        <div className="vContactRight">
          <span className="vContactName">{name}</span>
          <a className="vContactEmail" href={`mailto:${email}`}>
            {email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="vContactsWrapper">
      <div className="vCoursenavigationHeader">Contacts</div>
      <div className="vViereck"></div>
      <div className="vContactItemsWrapper">
        {contacts.contacts.map((contact, index) => {
          return contactItem(contact);
        })}
      </div>
    </div>
  );
}

export default Contacts;
