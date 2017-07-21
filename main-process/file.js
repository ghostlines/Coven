const { BrowserWindow } = require("electron");
const Kefir = require("kefir");
const path = require("path");
const url = require("url");

const { read: readUFS } = require("./ufs");

const File = {
  display: function(filePath) {
    const ufs = readUFS(filePath);
    const fileName = path.basename(filePath);

    let ui = new BrowserWindow({ width: 600, height: 400, show: false });
    const uiReady = Kefir.fromEvents(ui, "ready-to-show").take(1);
    const uiClosed = Kefir.fromEvents(ui, "closed");
    const uiLoaded = Kefir.fromEvents(ui.webContents, "did-finish-load");

    uiLoaded.observe(() => {
      ui.webContents.send("ping", { ufs, fileName });
    });

    uiReady.observe(() => ui.show());

    uiClosed.observe(() => {
      ui = null;
    });

    ui.loadURL(
      url.format({
        pathname: path.join(__dirname, "../file.html"),
        protocol: "file:",
        slashes: true
      })
    );
  }
};

module.exports = File;
