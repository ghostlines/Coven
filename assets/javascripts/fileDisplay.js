import React from "react";
import ReactDOM from "react-dom";

import Main from "./modules/main.jsx";

(function() {
  const { ipcRenderer } = require("electron");

  ipcRenderer.on("ping", (event, data) => {
    document.title = data.fileName;

    ReactDOM.render(
      <Main
        documents={data.ufs.documents}
        features={data.ufs.features}
        fontinfo={data.ufs.fontinfo}
        groups={data.ufs.groups}
        interpolation={data.ufs.interpolation}
        lib={data.ufs.lib}
        metainfo={data.ufs.metainfo}
      />,
      document.querySelector(".main")
    );
  });
})();
