var express = require('express');
var app = express();

app.use((req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", Object.keys(req.headers).toString() + checkc(req.headers['access-control-request-headers']));
    res.header("Access-Control-Allow-Methods", "POST,PUT,DELETE,GET,OPTIONS");

    function checkc(headers) {
        return headers == null ? "" : "," + headers.toString();
    }
    if (req.method === 'OPTIONS') {
        res.status(200).send();
        return;
    }
    next();
})
app.get('/login', (req, res, next) => {
    res.status(200).send({ retorno: "suceeso" });
});

app.listen('4500', () => {
    console.log("aplicação rodando!");
});