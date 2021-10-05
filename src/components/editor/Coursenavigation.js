import React from "react";
import { useRecoilState } from "recoil";
import { CourseNavigation as courseNavigation } from "../../services/atoms";

function Coursenavigation() {
  const [courseNavigationstate, setCourseNavigation] =
    useRecoilState(courseNavigation);

  const makeNewItem = (e) => {
    setCourseNavigation((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          time: "",
          title: "",
          chapter: [""],
          link: "",
        },
      ],
    }));
    e.preventDefault();
  };

  const itemChanged = ({ target: { value, name } }, index) => {
    let items = [...courseNavigationstate.items];

    let item = { ...items[index] };

    item[name] = value;

    items[index] = item;
    console.log(items);
    setCourseNavigation((prev) => ({
      ...prev,
      items: items,
    }));
  };

  const addNewChapter = (e, index) => {
    console.log(index);
    let items = [...courseNavigationstate.items];

    let item = { ...items[index] };

    let newChapter = [...item.chapter];
    newChapter.push("");
    item.chapter = newChapter;

    items[index] = item;
    setCourseNavigation((prev) => ({
      ...prev,
      items: items,
    }));
    e.preventDefault();
  };

  function courseItem({ time, title, chapter, link }, index) {
    return (
      <div className="courseItemWrapper" key={index}>
        <div className="timeTitleWrapper">
          <div className="InputWrapper">
            <div className="cnTimeTitle">Duration</div>
            <input
              type="text"
              name="time"
              className="eInputCN timeInput"
              onChange={(value) => itemChanged(value, index)}
              value={time}
            />
          </div>
          <div className="InputWrapper">
            <div className="cnTimeTitle">Title</div>
            <input
              type="text"
              name="title"
              className="eInputCN titleInput"
              value={title}
              onChange={(value) => itemChanged(value, index)}
            />
          </div>
        </div>
        <div className="ChapterLinkWrapper">
          <div className="InputWrapper chapterWrapper">
            <div className="cnTimeTitle">Chapter</div>
            {chapter.map((item) => {
              return (
                <div>
                  <input type="text" className="eInputCN" value={item} />
                </div>
              );
            })}
            <div
              className="chapterButton"
              onClick={(event) => addNewChapter(event, index)}
            >
              New chapter
            </div>
          </div>
          <div className="InputWrapper">
            <div className="cnTimeTitle">Link</div>
            <input
              type="text"
              className="eInputCN"
              name="link"
              value={link}
              onChange={(value) => itemChanged(value, index)}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="eHeaderContainer">
      <span className="header">Course Navigation</span>
      <div className="courseWrapper">
        {courseNavigationstate.items.map((item, index) => {
          return courseItem(item, index);
        })}
      </div>
      <button className="itemsButton" onClick={makeNewItem}>
        New Item
      </button>
    </div>
  );
}

export default Coursenavigation;
