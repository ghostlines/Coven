const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs')

const File = {
  display: function (mainWindow, filePath) {
    const infoPlistData = fs.readFileSync(`${filePath}/info.plist`)
    const documentsPlistData = fs.readFileSync(`${filePath}/documents.plist`)

    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'file.html'),
      protocol: 'file:',
      slashes: true
    }))

    mainWindow.webContents.openDevTools()
    mainWindow.webContents.on('did-finish-load', () => {
      mainWindow.webContents.send('ping', { 'infoPlist': infoPlistData.toString(), 'documentsPlist': documentsPlistData.toString() })
    })
  }
}

module.exports = File
