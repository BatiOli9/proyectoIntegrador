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