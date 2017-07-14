import { app } from "electron";
import debug from "electron-debug";
import Kefir from "kefir";

import File from "./main-process/file.js";
import Menu from "./main-process/menu.js";

const menu = Menu();

const appLaunched = Kefir.fromEvents(app, "will-finish-launching");
const appReady = Kefir.fromEvents(app, "ready");
const appOpenFile = Kefir.fromEvents(app, "open-file", (event, filePath) => {
  event.filePath = filePath;
  return event;
});

const isReady = appReady.scan(() => true, false);
const isLoading = isReady.map(x => !x);

const appOpenedFile = appOpenFile.map(event => event.filePath);
const openedFile = Kefir.merge([appOpenedFile, menu.openedFile]);
const fileToOpen = openedFile.bufferWhileBy(isLoading).flatten();

debug({ showDevTools: true });

appReady.observe(() => {
  menu.show();
});

appOpenFile.observe(event => {
  event.preventDefault();
});

fileToOpen.observe(filePath => {
  File.display(filePath);
});
