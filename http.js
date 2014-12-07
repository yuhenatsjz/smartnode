var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<h1>欢迎光临！</h1>');
    response.end('<p>你想要来点什么？</p>');
});

server.listen(9000);
console.log("HTTP server is listening at port 9000.");
