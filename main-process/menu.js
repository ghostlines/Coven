const { dialog, Menu } = require("electron");
const Kefir = require("kefir");

module.exports = function() {
  const openedFile = Kefir.pool();

  const openDialog = function() {
    const dialogSelection = Kefir.fromCallback(callback => {
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
            callback(fileNames[0]);
          }
        }
      );
    });

    openedFile.plug(dialogSelection);
  };

  const show = function() {
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
              openDialog();
            }
          }
        ]
      }
    ];
    const template = Menu.buildFromTemplate(menuTemplate);

    Menu.setApplicationMenu(template);
  };

  return {
    openedFile,
    openDialog,
    show
  };
};
