const http = require('http');


const server= http.createServer((request,response) => {
    response.end('Fisrt response from server')
})

server.listen(3000)



/*

npm init-y: command tocreate Node project


*/