import React from "react";
import HeaderImage from "./HeaderImage";
import CourseStructure from "./CourseStructure";
import LearningObjectives from "./LearningObjectives";
import Coursenavigation from "./Coursenavigation";

export default function View() {
  return (
    <div>
      <HeaderImage />
      <CourseStructure />
      <LearningObjectives />
      <Coursenavigation />
    </div>
  );
}
