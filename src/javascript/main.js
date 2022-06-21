let loginRedirect = () => {
    window.location.href = 'http://localhost:8888/login'
}

let logout = () => {
    fetch('http://localhost:8888/logout', {
            mode: 'no-cors'
    })


}

