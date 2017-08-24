const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Hello World");
    res.end();
});

server.listen(process.env.PORT || 80);
