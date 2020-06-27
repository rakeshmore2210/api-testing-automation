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
    url1 = 'http://dummy.restapiexample.com/api/v1/employees'
    request(url1, { json: true }, (err1, res1, body1) => {
        if (err1) {
            return console.log(err1);
        }
        if (body1.status == "success") {
            
            console.log("API 1st Hit")
            if (body1.data.length > 0) {
                url2 = 'http://dummy.restapiexample.com/api/v1/employee/' + body1.data[body1.data.length - 1].id //body1.data[0].id
                request(url2, { json: true }, (err2, res2, body2) => {
                    if (err2) {
                        return console.log(err2);
                    }
                    if (body2.status == "success") {
                        
                        console.log("API 2nd Hit")
                        console.log(body2.data)
                    }
                    else {
                        
                        console.log(body2.message)
                    }
                });
            }
        }
        else {
            
            console.log(body2.message)
        }
    });
});