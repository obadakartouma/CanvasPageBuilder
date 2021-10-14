import React from "react";
import { useRecoilValue } from "recoil";
import { CourseNavigation as courseNavigation } from "../../services/atoms";

function Coursenavigation() {
  const courseNavigationObjects = useRecoilValue(courseNavigation);

  function courseItem({ time, title, chapter, link }) {
    return (
      <div className="vCNWrapper">
        <div className="vCNTitle">
          <div className="vCNTitle_Duration">🕑{time} min</div>
          <div className="vCNTitle_title">{title}</div>
        </div>

        <div className="vCNBody">
          <ol type="1">
            {chapter.map((item) => {
              return <li>{item}</li>;
            })}
          </ol>
        </div>
        <div
          className="vCNButton"
          onClick={() => (window.location.href = link)}
        >
          Start
        </div>
      </div>
    );
  }

  return (
    <div className="vCoursenavigationWrapper">
      <div className="vCoursenavigationHeader">Course Navigation</div>
      <div className="vViereck"></div>
      <div className="vCourseNavigationItemsWrapper">
        {courseNavigationObjects.items.map((chapter, index) => {
          return courseItem(chapter);
        })}
      </div>
    </div>
  );
}

export default Coursenavigation;
