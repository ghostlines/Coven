const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

const File = require("./main-process/file.js");
const menu = require("./main-process/menu.js");

global.fileToOpen = null;

app.on("will-finish-launching", () => {
  app.on("open-file", (event, filePath) => {
    event.preventDefault();

    fileToOpen = filePath;
    File.display(fileToOpen);
  });
});

app.on("ready", () => {
  if (app.isReady()) {
    menu.show();

    if (fileToOpen) {
      File.display(fileToOpen);
    }
  }
});
