import React from "react";
import HeaderImage from "./layout1/HeaderImage";
import CourseStructure from "./layout1/CourseStructure";
import LearningObjectives from "./layout1/LearningObjectives";
import Coursenavigation from "./layout1/Coursenavigation";
import Contacts from "./layout1/Contacts";

export default function Layout1() {
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
