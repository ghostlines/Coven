const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path')
const url = require('url')
const FileInfo = require('./fileInfo.js')

let mainWindow

app.on('will-finish-launching', () => {
  app.on('open-file', (event, filepath) => {
    event.preventDefault()

    if (mainWindow, filePath) {
      FileInfo.openWindow(mainWindow)
    }
  })
})

app.on('ready', () => {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
  }))
  FileInfo.openWindow(mainWindow)
});
