import React from "react";
import MetroPlan from "./layout2/MetroPlan";
import BeschreibungBox from "./layout2/BeschreibungBox";
import HeaderImage from "./layout2/HeaderImage";
import InhaltsUebersicht from "./layout2/InhaltsUebersicht";

export default function Layout2() {
  return (
    <div>
      <HeaderImage />
      <BeschreibungBox />
      <MetroPlan />
      <InhaltsUebersicht />
    </div>
  );
}
