var http = require('http');

var server = http.createServer(function(request, response) {
    response.end('<html><head><title>Wellcome</title><meta charset="utf-8"></head><body><h1>欢迎光临！</h1></body></html>');
});

server.listen(9000);