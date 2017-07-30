import React from "react";
import ReactDOM from "react-dom";
import { Kefir as K } from "kefir";

import Main from "./modules/main.jsx";

(function() {
  const { ipcRenderer } = require("electron");

  const ping = K.fromEvents(ipcRenderer, "ping", (_, data) => data);
  const fileName = ping.map(d => d.fileName);
  const ufs = ping.map(d => d.ufs);

  fileName.observe(name => {
    document.title = name;
  });

  ReactDOM.render(<Main updates={ufs} />, document.querySelector(".main"));
})();
