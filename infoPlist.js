(function () {
  const fs = require('fs')
  require('electron').ipcRenderer.on('ping', (event, data) => {
    //   // const infoPlistData = JSON.stringify(data[0])
    //   // console.log(infoPlistData)
      document.getElementsByClassName('info__text')[0].innerHTML = data.infoPlist
    // })
  })
})()
