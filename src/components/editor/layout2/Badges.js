import React from 'react';
import { useRecoilState } from "recoil";
import { Badges as badges } from "../../../services/atoms";

export default function Badges() {

   const [BadgesObject, setBadgesObject] = useRecoilState(badges);
  
    const onChange = ({ target: { name, value } }) => {
      console.log(name);
      setBadgesObject((prev) => ({ ...prev, [name]: value }));
    }; 

  return (
  <div className='eBadgesContainer'>
    <span className="header">Badges</span>
      <input
        type="text"
        name="title"
        onChange={onChange}
        value={BadgesObject.title}
        placeholder="Title"
        className="eInputLearningObjectives"
      />
      <div>Inhalt</div>
      <textarea
        type="text"
        name="text"
        onChange={onChange}
        value={BadgesObject.text}
        placeholder="Text"
        className="eInputCourseStructur"
      />
  </div>
  );
}
