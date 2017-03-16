const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path')
const url = require('url')
const File = require('./file.js')

let mainWindow
global.fileToOpen = null

function createMainWindow () {
  mainWindow = new BrowserWindow({ width: 600, height: 400 })
  mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
  }))
}

app.on('will-finish-launching', () => {
  app.on('open-file', (event, filePath) => {
    event.preventDefault()
    fileToOpen = filePath
    if (mainWindow) {
      File.display(mainWindow, filePath)
    }
  })
})

app.once('window-all-closed', () => app.quit())

app.on('ready', () => {
  createMainWindow()
  if (fileToOpen) {
    File.display(mainWindow, fileToOpen)
  }
})
