const { dialog, Menu } = require("electron");

const File = require("./file.js");

const menu = {
  openDialog: function() {
    dialog.showOpenDialog(
      {
        properties: ["openFile"],
        filters: [
          {
            name: "All Files",
            extensions: ["ufs"]
          }
        ]
      },
      fileNames => {
        if (fileNames) {
          File.display(fileNames[0]);
        }
      }
    );
  },

  show: function() {
    const menuTemplate = [
      {
        submenu: [
          {
            role: "quit"
          }
        ]
      },
      {
        label: "File",
        submenu: [
          {
            role: "file",
            label: "Open File...",
            accelerator: "CommandOrControl+O",
            click() {
              menu.openDialog();
            }
          }
        ]
      }
    ];
    const template = Menu.buildFromTemplate(menuTemplate);

    Menu.setApplicationMenu(template);
  }
};

module.exports = menu;
