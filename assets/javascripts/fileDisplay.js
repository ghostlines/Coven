import React from "react";
import ReactDOM from "react-dom";

import Main from "./main.jsx";

(function() {
  const { ipcRenderer } = require("electron");

  ipcRenderer.on("ping", (event, data) => {
    document.title = data.fileName;

    ReactDOM.render(
      <Main
        info={data.infoPlist}
        documents={data.documentsPlist}
      />,
      document.querySelector(".main")
    );
  });
})();
