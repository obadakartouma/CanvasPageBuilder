import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { ImageUrl as imageAtom } from "../../services/atoms";

export default function HeaderImageUrl() {
  const [imageUrl, setImageUrl] = useRecoilState(imageAtom);
  const [inputValue, setInputValue] = useState("");

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const getPicture = (event) => {
    setImageUrl(inputValue);
    event.preventDefault();
  };

  return (
    <div className="eHeaderContainer">
      <span className="header">Header Image URL:</span>
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
