import { app as core } from "electron";
import debug from "electron-debug";
import Kefir from "kefir";

import App from "./main-process/app.js";
import File from "./main-process/file.js";
import Menu from "./main-process/menu.js";

const app = App(core);
const menu = Menu();

const openedFile = Kefir.merge([app.openedFile, menu.openedFile]);
const fileToOpen = openedFile.bufferWhileBy(app.isLoading).flatten();

debug({ showDevTools: true });

app.ready.observe(() => {
  menu.show();
});

app.openFile.observe(event => {
  event.preventDefault();
});

fileToOpen.observe(filePath => {
  File.display(filePath);
});
