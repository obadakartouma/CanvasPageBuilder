import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { LearningObjectives as learningObjectives } from "../../services/atoms";
import { FiTrash } from "react-icons/fi";

function LearningObjectives() {
  const [learningObj, setLearningObj] = useRecoilState(learningObjectives);

  const onChange = ({ target: { value } }) => {
    setLearningObj((prev) => ({ ...prev, youtubeUrl: value }));
  };

  const itemChanged = ({ target: { value } }, index) => {
    let items = [...learningObj.items];
    // 2. Make a shallow copy of the item you want to mutate
    let item = { ...items[index] };
    // 3. Replace the property you're intested in
    item.item = value;
    // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
    items[index] = item;
    setLearningObj((prev) => ({
      ...prev,
      items: items,
    }));
  };

  const makeNewItem = (e) => {
    setLearningObj((prev) => ({
      ...prev,
      items: [...prev.items, { item: "" }],
    }));
    e.preventDefault();
  };

  const deleteItem = (index) => {
    let items = [...learningObj.items];
    if (index !== -1) {
      items.splice(index, 1);
      setLearningObj((prev) => ({
        ...prev,
        items: items,
      }));
    }
  };

  function itemsInput(item, index) {
    return (
      <div className="eInputLearningObjectivesItemContainer">
        <input
          key={index}
          type="text"
          onChange={(value) => itemChanged(value, index)}
          value={item}
          className="eInputLearningObjectives"
        />
        <FiTrash className="trashIcon" onClick={() => deleteItem(index)} />
      </div>
    );
  }

  return (
    <div className="eHeaderContainer">
      <div className="header">Learning Objectives</div>
      <input
        type="text"
        onChange={onChange}
        value={learningObj.youtubeUrl}
        placeholder="Video URL"
        className="eInputLearningObjectives"
      />
      <div className="header_2">List Items:</div>
      {learningObj.items.map((item, index) => {
        return itemsInput(item.item, index);
      })}
      <button className="itemsButton" onClick={makeNewItem}>
        New Item
      </button>
    </div>
  );
}

export default LearningObjectives;
