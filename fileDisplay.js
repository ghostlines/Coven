(function () {
  const fs = require('fs')
  require('electron').ipcRenderer.on('ping', (event, data) => {

    console.log(data)
    document.getElementsByClassName('info__text')[0].innerHTML = data.infoPlist
    document.getElementsByClassName('documents__text')[0].innerHTML = data.documentsPlist
  })
})()
