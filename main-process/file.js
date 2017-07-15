import { BrowserWindow } from "electron";
import Kefir from "kefir";
import path from "path";
import url from "url";

import { read as readUFS } from "./ufs";

const File = {
  display: function(filePath) {
    const ufs = readUFS(filePath);
    const window = new BrowserWindow({ width: 600, height: 400, show: false });
    const windowReady = Kefir.fromEvents(window, "ready-to-show").take(1);

    window.loadURL(
      url.format({
        pathname: path.join(__dirname, "../file.html"),
        protocol: "file:",
        slashes: true
      })
    );

    window.webContents.on("did-finish-load", () => {
      const fileName = path.basename(filePath);

      window.webContents.send("ping", { ufs, fileName });
    });

    windowReady.observe(() => window.show());
  }
};

export default File;
