import { BrowserWindow } from "electron";
import fs from "fs";
import Kefir from "kefir";
import path from "path";
import url from "url";

const File = {
  display: function(filePath) {
    const infoPlistData = fs.readFileSync(`${filePath}/info.plist`);
    const documentsPlistData = fs.readFileSync(`${filePath}/documents.plist`);
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
      window.webContents.send("ping", {
        infoPlist: infoPlistData.toString(),
        documentsPlist: documentsPlistData.toString(),
        fileName: path.basename(filePath)
      });
    });

    windowReady.observe(() => window.show());
  }
};

export default File;
