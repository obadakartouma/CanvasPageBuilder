import React from 'react'
import { CanvasInfos as canvas } from "../../../services/atoms";
import { useRecoilState } from "recoil";

export default function CanvasInfos() {


    const [CanvasInfosObject, setCanvasInfosObject] = useRecoilState(canvas);
  
    const onChange = ({ target: { name, value } }) => {
      console.log(name);
      setBadgesObject((prev) => ({ ...prev, [name]: value }));
    }; 



  return (
    <div className='eCanvasInfosContainer'>
        <span className="header">Canvas Infos</span>
        <input
            type="text"
            name="title"
            onChange={onChange}
            value={CanvasInfosObject.titel}
            placeholder="Title"
            cclassName="eInputLearningObjectives"
        />
        <input
            type="text"
            name="text"
            onChange={onChange}
            value={}
            placeholder="Text"
            className="eInputCourseStructur"
        />
    </div>
  )
}
