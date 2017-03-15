(function () {
  require('electron').ipcRenderer.on('ping', (event, message) => {
    document.getElementsByClassName('info__text')[0].innerHTML = message.data
  })
})()
