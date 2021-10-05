import React from "react";
import { useRecoilValue } from "recoil";
import { CourseStructure as textAtom } from "../../services/atoms";

export default function CourseStructure() {
  const text = useRecoilValue(textAtom);

  return (
    <div className="vCourseStrContainer">
      <h3 className="viewHeader">Course Structure</h3>
      <div className="vViereck"></div>
      <span className="courseStrText">
        {text
          ? text
          : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit necessitatibus fuga quae ad similique eligendi amet, aliquid reiciendis quo qui porro, dolor dignissimos saepe illo sed odit quas adipisci fugit."}
      </span>
    </div>
  );
}
