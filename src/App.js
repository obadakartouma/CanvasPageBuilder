import "./App.css";
import { RecoilRoot } from "recoil";
import { useState } from "react";
import Export from "./components/Export";
import View from "./components/view/View";
import Editor from "./components/editor/Editor";

function App() {
  const [layout, setLayout] = useState(1);

  const changeLayout = (layout) => {
    setLayout(layout);
  };

  return (
    <RecoilRoot>
      <div className="App">
        <div className="header nav">
          <div className="h_title">Canvas Startpage Builder</div>
          <div className="h_layout_Wrapper">
            <span
              className={layout === 1 ? "layout_selected" : ""}
              onClick={() => changeLayout(1)}
            >
              Layout 1
            </span>
            <span
              className={layout === 2 ? "layout_selected" : ""}
              onClick={() => changeLayout(2)}
            >
              Layout 2
            </span>
          </div>
          <Export />
        </div>
        <div className="main">
          <div className="editor">
            <Editor layout={layout} />
          </div>
          <div className="view">
            <View layout={layout} />
          </div>
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
