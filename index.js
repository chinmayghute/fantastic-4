require('dotenv-extended').load();
const http = require('http');

const server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(process.env.USER);
});
console.log(process.env.PORT);
const port = process.env.PORT || 1337;
console.log(port);
server.listen(port);

console.log("Server running at http://localhost:%d", port);
