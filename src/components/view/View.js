import React from "react";
import HeaderImage from "./HeaderImage";
import CourseStructure from "./CourseStructure";
import LearningObjectives from "./LearningObjectives";
import Coursenavigation from "./Coursenavigation";
import Contacts from "./Contacts";

export default function View() {
  return (
    <div>
      <HeaderImage />
      <CourseStructure />
      <LearningObjectives />
      <Coursenavigation />
      <Contacts />
    </div>
  );
}
