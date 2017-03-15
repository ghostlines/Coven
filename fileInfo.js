const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

const FileInfo = {
  openWindow: function (mainWindow) {
    mainWindow.loadURL(url.format({
      pathname: path.join(__dirname, 'fileInfo.html'),
      protocol: 'file:',
      slashes: true
    }))
  }
}

module.exports = FileInfo
