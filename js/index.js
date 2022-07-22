$(function () {
  let myLiffId = '1657283580-JZ7makwb'
  liff.init({ liffId: myLiffId }).then(() => {
    // Redirect to another page after the returned Promise object has been resolved
    if (!liff.isLoggedIn()) {
      liff.login()
    } else {
      liff.getFriendship().then((data) => {
        if (data.friendFlag) {
          liff
            .getProfile()
            .then((profile) => {
              const name = profile.displayName
              localStorage.setItem('userId', profile.userId)
              localStorage.setItem('displayName', profile.displayName)
              localStorage.setItem('pictureUrl', profile.pictureUrl)
              $('#displayName').text(profile.displayName)
            })
            .catch((err) => {
              Swal.fire({
                title: 'Error!',
                html: err,
                icon: 'error',
                confirmButtonText: 'submit',
              })
            })
        }
      })
    }
  })
})
