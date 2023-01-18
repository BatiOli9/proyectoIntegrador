let express = require('express');
let app = express();
const path = require('path');
const methodOverride = require('method-override'); // Para poder usar los métodos PUT y DELETE

app.use(express.static("./public"));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '../public')));  // Necesario para los archivos estáticos en el folder /public
app.use(express.urlencoded({ extended: false })); // Para capturar el body
app.use(express.json()); // Para capturar el body
app.use(methodOverride('_method')); // Para poder usar los métodos PUT y DELETE

const indexRoutes = require('./routes/indexRoutes');
const productosRoutes = require('./routes/productosRoutes')
const carritoRoute = require('./routes/carritoRoute')
 
app.listen(3002, () => {
    console.log('Servidor corriendo en el puerto 3002')
});

app.use('/', indexRoutes);
app.use('/productos', productosRoutes);
app.use('/', carritoRoute);
// Agregar el de usuarios