import React from "react";
import { useRecoilValue } from "recoil";

import { ImageUrl as imageUrl } from "../services/atoms";
import { CourseStructure as courseStructure } from "../services/atoms";
import { LearningObjectives as learningObjectives } from "../services/atoms";
import { CourseNavigation as courseNavigation } from "../services/atoms";
import { Contact as contact } from "../services/atoms";

export default function Export() {
  const imageUrlObjects = useRecoilValue(imageUrl);
  const courseStructureObjects = useRecoilValue(courseStructure);
  const learningObjectivesObjects = useRecoilValue(learningObjectives);
  const courseNavigationObjects = useRecoilValue(courseNavigation);
  const contacts = useRecoilValue(contact);

  const exportData = () => {
    console.log("Exporting...");
    console.log(imageUrlObjects);
    console.log(courseStructureObjects);
    console.log(learningObjectivesObjects);
    console.log(courseNavigationObjects);
    console.log(contacts);
  };
  return (
    <div>
      <button onClick={exportData} className="h_button">
        Export
      </button>
    </div>
  );
}
