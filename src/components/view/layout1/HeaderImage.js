import React from "react";
import { useRecoilValue } from "recoil";
import { ImageUrl as imageAtom } from "../../../services/atoms";

export default function HeaderImage() {
  const imageUrl = useRecoilValue(imageAtom);

  return (
    <div className="vHeaderImageContainer">
      <img src={imageUrl} className="vHeaderImage" />
    </div>
  );
}
