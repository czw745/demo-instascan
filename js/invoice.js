function invApp() {
  // const cors = 'https://cors-anywhere.herokuapp.com/'
  // const url = 'https://api.einvoice.nat.gov.tw/PB2CAPIVAN/invapp/InvApp'
  // var settings = {
  //   url: `${cors}${url}`,
  //   method: 'POST',
  //   timeout: 0,
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   data: {
  //     version: '0.5',
  //     type: 'Barcode',
  //     invNum: 'DF06794279',
  //     action: 'qryInvDetail',
  //     generation: 'V2',
  //     invDate: '2022/07/15',
  //     UUID: '00000001',
  //     appID: 'EINV9201901086064',
  //     randomNumber: '4626',
  //     invTerm: '11108',
  //   },
  // }

  $.ajax('api/invApp.php', {
    success: (res) => {
      //   console.log(JSON.stringify(res))
      console.log(res)
    },
    error: (err) => {
      console.log(err)
    },
  })
}

function invServ() {
  // const cors = 'https://cors-anywhere.herokuapp.com/'
  // const url = 'https://api.einvoice.nat.gov.tw/PB2CAPIVAN/invapp/InvApp'
  // var settings = {
  //   url: `${cors}${url}`,
  //   method: 'POST',
  //   timeout: 0,
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   data: {
  //     version: '0.5',
  //     type: 'Barcode',
  //     invNum: 'DF06794279',
  //     action: 'qryInvDetail',
  //     generation: 'V2',
  //     invDate: '2022/07/15',
  //     UUID: '00000001',
  //     appID: 'EINV9201901086064',
  //     randomNumber: '4626',
  //     invTerm: '11108',
  //   },
  // }

  $.ajax('api/invServ.php', {
    success: (res) => {
      //   console.log(JSON.stringify(res))
      console.log(res)
    },
    error: (err) => {
      console.log(err)
    },
  })
}
