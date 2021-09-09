const { createServer } = require('http');
const app = require('./app')
const port = process.env.PORT || '8080'

async function server() {
    createServer(app).listen(port, () => {
        console.log(`server running: ${port}`)
    })
}

server();