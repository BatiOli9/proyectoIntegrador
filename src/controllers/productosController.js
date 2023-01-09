const fs = require('fs');
const path = require('path');

// Vamos a traer y a guardar el objeto literal donde guardamos toda la informacion de los productos
const productosPath = path.join(__dirname, '../databases/productosDataBase.json');

const controller = {
    productoDetalle:(req, res) =>{
        let id = req.params.id;
        const productos = JSON.parse(fs.readFileSync(productosPath, 'utf-8'));

        let productoFiltrado = productos.find(producto => {
            return producto.id == id;
        })
        res.render('productoDetalle', {producto: productoFiltrado});
    },
    crearProducto: (req, res) => {
        res.render('crear-producto');
    }
}
module.exports = controller;