const http = require('http');
const request = require('request');

const hostname = '127.0.0.1';
const port = 3000;
var responseText = ""

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    responseText += "Hello World\n"
    res.end(responseText);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    request('http://dummy.restapiexample.com/api/v1/employees', { json: true }, (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(res);
    });
});