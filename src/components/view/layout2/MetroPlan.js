import React from "react";
import { useRecoilValue } from "recoil";
import { Metroplan as metroplan } from "../../../services/atoms";
import metroPlanImage from "../../../theme2/Metroplan.png";

export default function MetroPlan() {
  const metroplanUrl = useRecoilValue(metroplan);

  return (
    <div className="MetroPlanContainer">
      <div className="vMetroplanHeader">Metroplan</div>
      <img src={metroPlanImage} className="vMetroPlanImage" />
    </div>
  );
}
