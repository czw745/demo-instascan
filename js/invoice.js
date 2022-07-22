$(function () {
  var seq = '7'
  let opts = {
    continuous: true,
    video: document.getElementById('preview'),
    mirror: false,
    captureImage: false,
    backgroundScan: true,
    refractoryPeriod: 5000,
    scanPeriod: 1,
  }
  let scanner = new Instascan.Scanner(opts)

  scanner.addListener('scan', function (content) {
    content = encodeURI(content)
    console.log(content)
    content_new = content.replace(/%C3%AF%C2%BB%C2%BF/, '')
    var invNum_1 = content_new.substr(0, 2) //發票號碼前兩碼
    var invNum_2 = content_new.substr(2, 8) //發票號碼後八碼
    var randomNumber = content_new.substr(17, 4) //隨機碼
    var invTerm_1 = content_new.substr(10, 3) //民國年
    var invTerm_2 = content_new.substr(13, 2) //民國月
    var invTerm_mon = content_new.substr(13, 2) //民國月
    var invTerm_3 = content_new.substr(15, 2) //民國日

    if (invTerm_1 !== '111') {
      Swal.fire({
        title: 'Error!',
        text: '您的發票不符合資格活動期間內的指定之發票',
        icon: 'error',
        confirmButtonText: 'rescan',
      })
    } else {
      let html =
        '發票號碼：' +
        invNum_1 +
        '-' +
        invNum_2 +
        '\t隨機碼：' +
        randomNumber +
        '\n發票時間：' +
        invTerm_1 +
        '年' +
        invTerm_2 +
        '月' +
        invTerm_3 +
        '日'

      if (invTerm_2 % 1 === 0) {
        invTerm_2 = +invTerm_2 + 1
        if (invTerm_2 < 10) {
          invTerm_2 = '0' + invTerm_2
        }
      }

      Swal.fire({
        title: 'Invoice Info',
        html: html,
        icon: 'info',
        confirmButtonText: 'submit',
      }).then(() => {
        $.ajax('/api/invApp.php', {
          data: {
            invNum: invNum_1 + invNum_2,
            randomNumber: randomNumber,
            invDate: +invTerm_1 + 1911 + '/' + invTerm_mon + '/' + invTerm_3,
            invTerm: invTerm_1 + invTerm_2,
          },
          success: (res) => {
            console.log(JSON.stringify(res))
            // console.log(res)
            // location.href = '/index.php'
          },
          error: (err) => {
            console.log(err)
          },
        })
      })
    }
  })
  //開始偵聽掃描事件，若有偵聽到印出內容。
  Instascan.Camera.getCameras()
    .then(function (cameras) {
      //取得設備的相機數目
      if (cameras.length > 0) {
        ///若設備相機數目大於0 則先開啟第0個相機
        var cameras_position = ''
        if (cameras[1] == undefined) {
          cameras_position = 0
        } else {
          cameras_position = 1
        }
        scanner.start(cameras[cameras_position]) //0是前鏡頭，1是後鏡頭
      } else {
        //若設備沒有相機數量則顯示"No cameras found";
        //這裡自行判斷要寫什麼
        alert('沒有找到任何攝像頭！')
      }
    })
    .catch(function (e) {
      alert('本裝置並沒有攝像頭相關功能！')
    })
})
