import React, { useEffect } from "react";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";

export default function Editor({ layout }) {
  const setLayout = (layout) => {
    switch (layout) {
      case 1:
        return <Layout1 />;
        break;
      case 2:
        return <Layout2 />;
        break;
      default:
        break;
    }
  };

  return <div>{setLayout(layout)}</div>;
}
