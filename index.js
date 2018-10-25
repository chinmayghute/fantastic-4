var express = require('express');
var app = express();
var port = 8099;

app.get('/', function (req, res) {
    res.send("HELLO WORLD");
});

app.listen(port, function () {
    console.log("Example app listening on port: ", port, "!");
});