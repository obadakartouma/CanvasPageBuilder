import React from "react";
import { useRecoilValue } from "recoil";
import { Inhaltsuebersicht as inhaltsuebersicht } from "../../../services/atoms";
import CardImage from "../../../theme2/cardsImage.jpg";

export default function InhaltsUebersicht() {
  const inhaltsuebersichtObject = useRecoilValue(inhaltsuebersicht);

  function courseClick(link) {
    window.location.href = link;
  }

  function courseInhalt({ ImageUrl, courses }) {
    return (
      <div className="vIUCard">
        <div className="vIuImageContainer">
          <img className="vIuImage" src={ImageUrl} />
        </div>
        <div className="vIuCourses">
          {courses.map((item) => {
            return (
              <div className="vIuCourse" onClick={() => courseClick(item.link)}>
                {item.text}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="vInhaltsUebersichtContainer">
      <div className="vInhaltUebersichtTitle">Inhaltsübersicht</div>
      <div className="vInhaltUebersichtCardMapper">
        {inhaltsuebersichtObject.items.map((chapter, index) => {
          return courseInhalt(chapter);
        })}
        <div className="vIUCard">
          <div className="vIuImageContainer">
            <img className="vIuImage" src={CardImage} />
          </div>
          <div className="vIuCourses">
            <div className="vIuCourse">1. Einleitung</div>
            <div className="vIuCourse">2. Einleitung</div>
            <div className="vIuCourse">3. Einleitung</div>
            <div className="vIuCourse">4. Einleitung</div>
          </div>
        </div>
      </div>
    </div>
  );
}
