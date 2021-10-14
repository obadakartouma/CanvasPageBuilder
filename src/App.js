import "./App.css";
import { RecoilRoot } from "recoil";
import Export from "./components/Export";
import HeaderImageUrl from "./components/editor/HeaderImageUrl";
import View from "./components/view/View";
import CourseStructure from "./components/editor/CourseStructure";
import LearningObjectives from "./components/editor/LearningObjectives";
import Coursenavigation from "./components/editor/Coursenavigation";
import Contacts from "./components/editor/Contacts";

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <div className="header nav">
          <div className="h_title">Canvas Startpage Builder</div>
          <Export />
        </div>
        <div className="main">
          <div className="editor">
            <HeaderImageUrl />
            <CourseStructure />
            <LearningObjectives />
            <Coursenavigation />
            <Contacts />
          </div>
          <div className="view">
            <View />
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
