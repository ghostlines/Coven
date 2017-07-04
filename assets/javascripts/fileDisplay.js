(function() {
  const electron = require("electron");
  const fs = require("fs");

  electron.ipcRenderer.on("ping", (event, data) => {
    const infoPlistText = document.createTextNode(data.infoPlist);
    const documentsPlistText = document.createTextNode(data.documentsPlist);

    document.title = data.fileName;
    document.getElementsByClassName("info__text")[0].appendChild(infoPlistText);
    document
      .getElementsByClassName("documents__text")[0]
      .appendChild(documentsPlistText);
  });
})();
