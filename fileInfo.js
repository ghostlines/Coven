const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const fs = require ('fs')

const FileInfo = {
  openWindow: function (mainWindow) {
    const file = `${process.argv[2]}/info.plist`
    fs.readFile(file, (err, data) => {
      if (err) {
        return console.error(err);
      }
      const fileData = { 'data': data.toString() }

      mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'fileInfo.html'),
        protocol: 'file:',
        slashes: true
      }))

      mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.webContents.send('ping', fileData)
      })
    })
  }
}

module.exports = FileInfo
