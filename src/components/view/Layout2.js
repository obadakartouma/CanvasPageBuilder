import React from "react";
import MetroPlan from "./layout2/MetroPlan";
import BeschreibungBox from "./layout2/BeschreibungBox";
import HeaderImage from "./layout2/HeaderImage";

export default function Layout2() {
  return (
    <div>
      <HeaderImage />
      <BeschreibungBox />
      <MetroPlan />
    </div>
  );
}
