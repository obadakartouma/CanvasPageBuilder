import React from "react";
import RaketeLogo from "../../../theme2/Rakete.png";
import { useRecoilValue } from "recoil";
import { BeschreibungBox as beschreibungBox } from "../../../services/atoms";

function BeschreibungBox() {
  const beschreibungBoxObjects = useRecoilValue(beschreibungBox);

  const goToModule = () => {
    console.log(beschreibungBoxObjects.link);
  };

  return (
    <div className="layout2Beschreibung">
      <img
        className="layout2BeschreibungIcon"
        src={
          beschreibungBoxObjects.image
            ? beschreibungBoxObjects.image
            : RaketeLogo
        }
      />

      <div className="layout2BeschreibungRecht">
        <h2 className="beschreibungBoxTitle">{beschreibungBoxObjects.title}</h2>
        <div className="beschreibungBoxText">{beschreibungBoxObjects.text}</div>
        <div className="beschreibungBoxButton" onClick={goToModule}>
          Direkt zu den Modulen
        </div>
      </div>
    </div>
  );
}

export default BeschreibungBox;
