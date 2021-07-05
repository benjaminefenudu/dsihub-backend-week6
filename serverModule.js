var http = require('http');
const PORT = process.env.PORT || 3000;

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});  
    res.write('Hello World!');  
    res.write(req.url);      
    res.end();                  
}).listen(8080);                


