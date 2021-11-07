import React, { useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { LearningObjectives as learningObjectives } from "../../services/atoms";

function LearningObjectives() {
  const learningObjects = useRecoilValue(learningObjectives);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // you can add logic to check if sources have been changed
    }
  }, [learningObjects.youtubeUrl]);

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
          <video controls="controls" class="video" ref={videoRef}>
            {learningObjects.youtubeUrl ? (
              <source src={learningObjects.youtubeUrl} type="video/mp4" />
            ) : (
              <source />
            )}
          </video>
        </div>
      </div>
    </div>
  );
}

export default LearningObjectives;
