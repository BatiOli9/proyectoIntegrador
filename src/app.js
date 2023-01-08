let express = require('express');
let app = express();
const path = require('path');

app.use(express.static("./public"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

const indexRoutes = require('../routes/indexRoutes');
const productosRoutes = require('../routes/productosRoutes')
const carritoRoute = require('../routes/carritoRoute')
 
app.listen(3002, () => {
    console.log('Servidor corriendo en el puerto 3002')
});

app.use('/', indexRoutes);
app.use('/', productosRoutes);
app.use('/', carritoRoute);

