import React from "react";
import ReactDOM from "react-dom";

import Main from "./modules/main.jsx";

(function() {
  const { ipcRenderer } = require("electron");

  ipcRenderer.on("ping", (event, data) => {
    document.title = data.fileName;

    ReactDOM.render(
      <Main info={data.ufs.info} documents={data.ufs.documents} />,
      document.querySelector(".main")
    );
  });
})();
