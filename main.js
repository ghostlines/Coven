const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const FileInfo = require('./fileInfo.js')
let win

// getting the filepath through a argument passed when running `electron . filepath` for testing purposes

function createWindow () {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'assets/icons/mac/defconAppKitUFOIcon.icns')
  })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

// app.on('will-finish-launching', () => {
  app.on('open-file', (event, path) => {
    event.preventDefault()
    FileInfo.openWindow
  })
// })

// this is for testing purposes. not sure what should be the default if app is not opened through a double-click
app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
