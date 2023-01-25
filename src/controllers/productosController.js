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
            res.render("crear-producto")
    },
    crearProductoProcesar: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productosPath, 'utf-8'));
        console.log(req.body);
        let productoNuevo = {
            id: productos[productos.length - 1].id + 1,
            nombre: req.body.nombre,
            codigo: req.body.codigo,
            precio: req.body.precio,
            garantia: req.body.garantia,
            descripcion: req.body.descripcion
        }

        productos.push(productoNuevo)
        fs.writeFileSync(productosPath, JSON.stringify(productos, null, " "));
        res.redirect("/productos/crear-producto");
    }
}
module.exports = controller;