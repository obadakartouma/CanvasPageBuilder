import React from "react";
import RaketeLogo from "../../../theme2/Rakete.png";
import { useRecoilValue } from "recoil";
import { BeschreibungBox as beschreibungBox } from "../../../services/atoms";

function BeschreibungBox() {
  const beschreibungBoxObjects = useRecoilValue(beschreibungBox);

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
        <div className="beschreibungBoxText">
          {beschreibungBoxObjects.text
            ? beschreibungBoxObjects.text
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita veritatis possimus, adipisci dignissimos labore molestiae temporibus inventore non provident eius cumque sapiente, optio dolor ullam, id corporis at suscipit commodi."}{" "}
        </div>
        <div
          className="beschreibungBoxButton"
          onClick={() => (window.location.href = beschreibungBoxObjects.link)}
        >
          Direkt zu den Modulen
        </div>
      </div>
    </div>
  );
}

export default BeschreibungBox;
