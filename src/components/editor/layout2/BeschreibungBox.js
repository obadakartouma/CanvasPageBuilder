import React from "react";
import { useRecoilState } from "recoil";
import { BeschreibungBox as beschreibungBox } from "../../../services/atoms";

function BeschreibungBox() {
  const [beschreibungBoxObject, setBeschreibungBoxObject] =
    useRecoilState(beschreibungBox);

  const onChange = ({ target: { name, value } }) => {
    console.log(name);
    setBeschreibungBoxObject((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="eHeaderContainer">
      <span className="header">Beschreibung</span>
      <input
        type="text"
        name="title"
        onChange={onChange}
        value={beschreibungBoxObject.title}
        placeholder="Title"
        className="eInputLearningObjectives"
      />
      <textarea
        type="text"
        name="text"
        onChange={onChange}
        value={beschreibungBoxObject.text}
        placeholder="Beschreibung"
        className="eInputCourseStructur"
      />
      <input
        type="text"
        name="link"
        onChange={onChange}
        value={beschreibungBoxObject.link}
        placeholder="Link"
        className="eInputLearningObjectives"
      />
      <input
        type="text"
        name="image"
        onChange={onChange}
        value={beschreibungBoxObject.image}
        placeholder="Image"
        className="eInputLearningObjectives"
      />
    </div>
  );
}

export default BeschreibungBox;
