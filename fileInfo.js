const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

const FileInfo = {
  openWindow: function () {
    // const filepath = process.argv[2]

    win = new BrowserWindow({
      width: 800,
      height: 600,
      icon: path.join(__dirname, 'assets/icons/mac/defconAppKitUFOIcon.icns')
    })

    win.loadURL(url.format({
      pathname: path.join(__dirname, 'fileInfo.html'),
      protocol: 'file:',
      slashes: true
    }))

    win.on('closed', () => {
      win = null
    })
  }
}

module.exports = FileInfo
