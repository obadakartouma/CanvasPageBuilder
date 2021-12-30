import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Metroplan as metroplan } from "../../../services/atoms";

export default function MetroPlan() {
  const [metroplanUrl, setMetroplanUrl] = useRecoilState(metroplan);
  const [inputValue, setInputValue] = useState("");

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const getPicture = (event) => {
    setMetroplanUrl(inputValue);
    event.preventDefault();
  };

  return (
    <div className="eHeaderContainer">
      <span className="header">Metroplan Image URL:</span>
      <div style={{ display: "flex" }}>
        <input
          type="text"
          onChange={onChange}
          value={inputValue}
          placeholder="uploaded image url from canvas"
          className="eInputHeaderUrl"
        />
        <button onClick={getPicture} className="button">
          show
        </button>
      </div>
    </div>
  );
}
