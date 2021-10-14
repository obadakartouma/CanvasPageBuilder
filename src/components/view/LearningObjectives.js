import React from "react";
import { useRecoilValue } from "recoil";
import { LearningObjectives as learningObjectives } from "../../services/atoms";

function LearningObjectives() {
  const learningObjects = useRecoilValue(learningObjectives);
  return (
    <div className="vLearningObjectivesContainer">
      <h3 className="viewHeader">Learning Objectives</h3>
      <div className="vViereck"></div>
      <div className="vLearningObjectivesInnerContainer">
        <div className="vLearningObjectivesItems">
          <ul>
            {learningObjects.items.map((item, index) => (
              <li key={index}>{item.item}</li>
            ))}
          </ul>
        </div>
        <div className="vLearningObjectivesVideo">
          <video src={learningObjects.youtubeUrl} />
        </div>
      </div>
    </div>
  );
}

export default LearningObjectives;
