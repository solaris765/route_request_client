const http = require('http')

const endPoint = 'https://localhost:3030'

function getConnected() {
    try {
        http.get({
            agent: false,
            path: '/sse-server',
            host: 'localhost',
            port: 8080
        }, (res) => {
            res.on('data', data => {
                console.log(data.toString())
            })
            res.on('error', error => {
                console.error(error)
            })
            res.on('close', end => {
                console.log('done?')
            })
        })
    } catch (err) {
        console.log('----------------------------------------\nhandled\n\n')
        console.error(err)
    }
}

getConnected()
