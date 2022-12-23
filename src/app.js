let express = require('express');
let app = express();
const path = require('path');

app.use(express.static("./public"));

app.listen(3003, () => {
    console.log('Servidor corriendo en el puerto 3003')
});

app.get('/', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/index.html')
    res.sendFile(htmlPath)
});

app.get('/login.html', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/login.html')
    res.sendFile(htmlPath)
});

app.get('/register.html', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/register.html')
    res.sendFile(htmlPath)
});

app.get('/carrito.html', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/carrito.html')
    res.sendFile(htmlPath)
});

app.get('/producto1.html', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/producto1.html')
    res.sendFile(htmlPath)
});

app.get('/producto2.html', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/producto2.html')
    res.sendFile(htmlPath)
});

app.get('/producto3.html', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/producto3.html')
    res.sendFile(htmlPath)
});

app.get('/producto4.html', function(req, res) {
    let htmlPath = path.resolve(__dirname, './views/producto4.html')
    res.sendFile(htmlPath)
});