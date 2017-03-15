const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path')
const url = require('url')
const File = require('./file.js')

let mainWindow
// global.fileToOpen = null

function createMainWindow () {
  mainWindow = new BrowserWindow({ width: 800, height: 600 })
  mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
  }))
  File.display(mainWindow)
}

app.on('will-finish-launching', () => {
  app.on('open-file', (event, filePath) => {
    event.preventDefault()
    fileToOpen = filePath

    if (mainWindow) {
      File.display(mainWindow)
    }
  })
})

app.on('ready', createMainWindow)
