const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fs = require('fs')

const File = {
  display: function (filePath) {
    const infoPlistData = fs.readFileSync(`${filePath}/info.plist`)
    const documentsPlistData = fs.readFileSync(`${filePath}/documents.plist`)

      const mainWindow = new BrowserWindow({ width: 600, height: 400 })
      mainWindow.loadURL(url.format({
          pathname: path.join(__dirname, '../file.html'),
          protocol: 'file:',
          slashes: true
    }))

    mainWindow.webContents.on('did-finish-load', () => {
      mainWindow.webContents.send('ping', { 'infoPlist': infoPlistData.toString(), 'documentsPlist': documentsPlistData.toString(), fileName: path.basename(filePath) })
    })
  }
}

module.exports = File
