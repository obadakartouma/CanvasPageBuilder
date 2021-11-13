import React, { useState } from "react";
import { useRecoilValue } from "recoil";

import { ImageUrl as imageUrl } from "../services/atoms";
import { CourseStructure as courseStructure } from "../services/atoms";
import { LearningObjectives as learningObjectives } from "../services/atoms";
import { CourseNavigation as courseNavigation } from "../services/atoms";
import { Contact as contact } from "../services/atoms";
import makeNewHtml from "../services/exportHtmlTemplate";
import Modal from "./Modal";

export default function Export() {
  const imageUrlObjects = useRecoilValue(imageUrl);
  const courseStructureObjects = useRecoilValue(courseStructure);
  const learningObjectivesObjects = useRecoilValue(learningObjectives);
  const courseNavigationObjects = useRecoilValue(courseNavigation);
  const contacts = useRecoilValue(contact);
  const [showModal, setShowModal] = useState(false);
  const [html, setHtml] = useState("");

  const hideModal = () => {
    setShowModal(false);
  };

  const exportData = () => {
    const exportedHtml = makeNewHtml(
      imageUrlObjects,
      courseStructureObjects,
      learningObjectivesObjects,
      courseNavigationObjects,
      contacts
    );
    setHtml(exportedHtml);
    setShowModal(true);
    console.log(exportedHtml);
  };
  return (
    <div>
      <Modal show={showModal} handleClose={hideModal}>
        {html}
      </Modal>
      <button onClick={exportData} className="h_button">
        Export
      </button>
    </div>
  );
}
