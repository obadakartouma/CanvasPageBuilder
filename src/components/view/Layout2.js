import React from "react";
import MetroPlan from "./layout2/MetroPlan";
import BeschreibungBox from "./layout2/BeschreibungBox";
import HeaderImage from "./layout2/HeaderImage";
import InhaltsUebersicht from "./layout2/InhaltsUebersicht";
import Badges from "./layout2/Badges";
import CanvasInfos from "./layout2/CanvasInfos";
import Kontakt from "./layout2/Kontakt";


export default function Layout2() {
  return (
    <div>
      <HeaderImage />
      <BeschreibungBox />
      <MetroPlan />
      <InhaltsUebersicht />
      <Badges />
      <CanvasInfos />
      <Kontakt />
    </div>
  );
}
