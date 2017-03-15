const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs')

const File = {
  // openWindow: function (mainWindow, filePath) {
  display: function (mainWindow) {
    const filePath = `${process.argv[2]}/info.plist`
    const documentsPath = `${process.argv[2]}/documents.plist`

    fs.readFile(filePath, (err, data) => {
      if (err) {
        return console.error(err);
      }

      mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'file.html'),
        protocol: 'file:',
        slashes: true
      }))

      mainWindow.webContents.openDevTools()
      mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.webContents.send('ping', { 'infoPlist': data })
      })
    })
  }
}

module.exports = File
