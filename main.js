const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const dialog = electron.dialog
const path = require('path')
const url = require('url')
const Menu = electron.Menu

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

function openFileMenuItem() {
  dialog.showOpenDialog({
    properties: ['openFile']
  }, (fileNames) => {
    File.display(mainWindow, fileNames[0])
  })
}

function showMenu () {
  const menuTemplate = [
    {
      label: 'Edit',
      submenu: [
        {
          role: 'quit'
        }
      ]
    },
    {
      label: 'File',
      submenu: [
        {
          role: 'file',
          label: 'Open File...',
          accelerator: 'CommandOrControl+O',
          click() { openFileMenuItem() }
        }
      ]
    }
  ]

  const template = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(template)
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

app.on('ready', () => {
  createMainWindow()
  showMenu()
  if (fileToOpen) {
    File.display(mainWindow, fileToOpen)
  }
})
