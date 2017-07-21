const Kefir = require("kefir");

function App(core) {
  const ready = Kefir.fromEvents(core, "ready");
  const openFile = Kefir.fromEvents(core, "open-file", (event, filePath) => {
    event.filePath = filePath;
    return event;
  });

  const isReady = ready.scan(() => true, false);
  const isLoading = isReady.map(x => !x);

  const openedFile = openFile.map(event => event.filePath);

  return {
    isLoading,
    isReady,
    openedFile,
    openFile,
    ready
  }
}

module.exports = App;
