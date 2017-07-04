(function() {
  const { ipcRenderer } = require("electron");
  const fs = require("fs");

  ipcRenderer.on("ping", (event, data) => {
    const infoPlistText = document.createTextNode(data.infoPlist);
    const documentsPlistText = document.createTextNode(data.documentsPlist);

    document.title = data.fileName;
    document.getElementsByClassName("info__text")[0].appendChild(infoPlistText);
    document
      .getElementsByClassName("documents__text")[0]
      .appendChild(documentsPlistText);
  });
})();
