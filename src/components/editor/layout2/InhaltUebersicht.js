import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Inhaltsuebersicht as inhaltsuebersicht } from "../../../services/atoms";

function InhaltUebersicht() {
  const [inhaltsuebersichtstate, setInhaltsuebersicht] =
    useRecoilState(inhaltsuebersicht);

  useEffect(() => {
    console.log(inhaltsuebersichtstate);
    //TODO: BUG FIX
  }, [inhaltsuebersichtstate]);

  const makeNewItem = (e) => {
    setInhaltsuebersicht((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          ImageUrl: "",
          courses: [{ text: "", link: "" }],
        },
      ],
    }));
    e.preventDefault();
  };

  const itemChanged = ({ target: { value, name } }, index) => {
    let items = [...inhaltsuebersichtstate.items];

    let item = { ...items[index] };

    item[name] = value;

    items[index] = item;
    setInhaltsuebersicht((prev) => ({
      ...prev,
      items: items,
    }));
  };

  const addNewChapter = (e, index) => {
    let items = [...inhaltsuebersichtstate.items];

    let item = { ...items[index] };

    let newChapter = [...item.courses];
    newChapter.push("");
    item.courses = newChapter;

    items[index] = item;
    setInhaltsuebersicht((prev) => ({
      ...prev,
      items: items,
    }));
    e.preventDefault();
  };

  const addChapterText = ({ target: { value, name } }, chapterIndex, index) => {
    let items = [...inhaltsuebersichtstate.items];
    let item = items[index];

    console.log("item ", item);

    let courses = [...item.courses];
    let course = courses[chapterIndex];
    course.text = value;

    item.courses = courses;
    items[index] = item;
    setInhaltsuebersicht((prev) => ({
      ...prev,
      items: items,
    }));
  };

  const addChapterlink = (e, chapterIndex, index) => {
    let items = [...inhaltsuebersichtstate.items];

    let item = { ...items[index] };

    let newChapter = [...item.courses];
    newChapter[chapterIndex].link = e.target.value;
    item.courses = newChapter;

    items[index] = item;
    setInhaltsuebersicht((prev) => ({
      ...prev,
      items: items,
    }));
  };

  const deleteItem = (index) => {
    let items = [...inhaltsuebersichtstate.items];
    if (index !== -1) {
      items.splice(index, 1);
      setInhaltsuebersicht((prev) => ({
        ...prev,
        items: items,
      }));
    }
  };

  function courseItem({ ImageUrl, courses }, index) {
    return (
      <div className="courseItemBigWrapper">
        <div className="courseItemWrapper" key={index}>
          <div className="InputWrapper">
            <div className="cnTimeTitle">Image Url</div>
            <input
              type="text"
              name="ImageUrl"
              className="eInputCN titleInput"
              value={ImageUrl}
              onChange={(value) => itemChanged(value, index)}
            />
          </div>
          <div className="ChapterLinkWrapper">
            <div className="InputWrapper chapterWrapper">
              <div className="cnTimeTitle">Courses</div>
              {courses.map((item, chapterIndex) => {
                return (
                  <div key={chapterIndex}>
                    <input
                      type="text"
                      placeholder="Course"
                      className="eInputCN"
                      value={item.text}
                      onChange={(value) =>
                        addChapterText(value, chapterIndex, index)
                      }
                    />
                    <input
                      type="text"
                      placeholder="Link"
                      className="eInputCN"
                      value={item.link}
                      onChange={(value) =>
                        addChapterlink(value, chapterIndex, index)
                      }
                    />
                  </div>
                );
              })}
              <div
                className="chapterButton"
                onClick={(event) => addNewChapter(event, index)}
              >
                New Course
              </div>
            </div>
            <div className="DeletebuttonIcon" onClick={() => deleteItem(index)}>
              Delete
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="eHeaderContainer">
      <span className="header">Inhaltsübersicht</span>
      <div className="courseWrapper">
        {inhaltsuebersichtstate.items.map((item, index) => {
          return courseItem(item, index);
        })}
      </div>
      <button className="itemsButton" onClick={makeNewItem}>
        New Item
      </button>
    </div>
  );
}

export default InhaltUebersicht;
