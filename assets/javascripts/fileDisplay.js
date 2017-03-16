(function () {
  const fs = require('fs')
  require('electron').ipcRenderer.on('ping', (event, data) => {
    document.title = data.fileName
    const infoPlistText = document.createTextNode(data.infoPlist)
    const documentsPlistText = document.createTextNode(data.documentsPlist)
    document.getElementsByClassName('info__text')[0].appendChild(infoPlistText)
    document.getElementsByClassName('documents__text')[0].appendChild(documentsPlistText)
  })
})()
