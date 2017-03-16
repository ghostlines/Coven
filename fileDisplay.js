(function () {
  const fs = require('fs')
  require('electron').ipcRenderer.on('ping', (event, data) => {
    document.title = data.fileName
    document.getElementsByClassName('info__text')[0].innerHTML = data.infoPlist
    document.getElementsByClassName('documents__text')[0].innerHTML = data.documentsPlist
  })
})()
