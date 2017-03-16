const electron = require('electron')
const Menu = electron.Menu
const dialog = electron.dialog

const File = require('./file.js')

const menu = {
  openDialog: function (mainWindow) {
    dialog.showOpenDialog({
      properties: ['openFile']
    }, (fileNames) => {
      File.display(mainWindow, fileNames[0])
    })
  },

  show: function (mainWindow) {
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
            click() { menu.openDialog(mainWindow) }
          }
        ]
      }
    ]

    const template = Menu.buildFromTemplate(menuTemplate)
    Menu.setApplicationMenu(template)
  }
}

module.exports = menu
