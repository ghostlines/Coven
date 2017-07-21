const { app: core } = require("electron");
const debug = require("electron-debug");
const Kefir = require("kefir");

const App = require("./main-process/app.js");
const File = require("./main-process/file.js");
const Menu = require("./main-process/menu.js");

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
