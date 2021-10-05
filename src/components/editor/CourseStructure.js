import React from "react";
import { useRecoilState } from "recoil";
import { CourseStructure as courseStructure } from "../../services/atoms";

function CourseStructure() {
  const [courseStructureText, setCourseStructureText] =
    useRecoilState(courseStructure);

  const onChange = ({ target: { value } }) => {
    setCourseStructureText(value);
  };

  return (
    <div className="eHeaderContainer">
      <span className="header">Course Structure</span>
      <textarea
        type="text"
        onChange={onChange}
        value={courseStructureText}
        placeholder="Your Text"
        className="eInputCourseStructur"
      />
    </div>
  );
}

export default CourseStructure;
