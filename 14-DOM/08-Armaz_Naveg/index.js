document.getElementById('sessionBtn').addEventListener('click', function () {
    const input = document.getElementById('session')
    // window.sessionStorage
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSesssion').addEventListener('click', function () {
    const info = sessionStorage.getItem('info')
    const input = document.getElementById('session')
    input.value = info

})

document.getElementById('localBtn').addEventListener('click', function () {
    const input = document.getElementById('local')
    localStorage.setItem('Arm:', input.value)

})
document.getElementById('readLocal').addEventListener('click', function () {
    const input = document.getElementById('local')
    const info = localStorage.getItem('Arm:')
    input.value = info
})


document.getElementById('localBtn').addEventListener('click', function () {
    const input = document.getElementById('cookie')
    window.co

})
document.getElementById('cookieBtn').addEventListener('click', function () {
    const input = document.getElementById('cookie')
    const cookie = 'infoCookie=' + input.value + ';'
    const expiration = 'expires' + new Date(2024, 10, 8) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
})