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
        res.redirect("/");
    },
    productos: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productosPath, 'utf-8'));
        let productosFiltrados = productos.filter( producto => {
            return producto.stock == true;
        })

        res.render('productos', {productos: productosFiltrados});
    },
    editarProducto: (req, res) => {
        let id = req.params.id;
        const productos = JSON.parse(fs.readFileSync(productosPath, 'utf-8'));

        let productosFiltrados = productos.find(producto => {
            return producto.id == id
        });
        
        res.render("editar-producto", {producto: productosFiltrados});
    },
    editarProductoProcesar: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productosPath, 'utf-8'));

        let id = req.params.id;
        let productoAnterior = productos.find(producto => {
            return producto.id == id
        })

        let productoEditado = {
            id: productoAnterior.id,
            nombre: req.body.nombre,
            precio: req.body.precio,
            descuento: req.body.descuento,
            codigo: req.body.codigo,
            garantia: req.body.garantia,
            descripcion: req.body.descripcion
        }

        let indice = productos.findIndex(producto => {
            return producto.id == id
        })

        productos[indice] = {...productos[indice], ...productoEditado};

        fs.writeFileSync(productosPath, JSON.stringify(productos, null, " "));
        res.redirect("/");
    },
    eliminarProducto: (req, res) => {
        let id = req.params.id;
        const productos = JSON.parse(fs.readFileSync(productosPath));

        let productosFiltrados = productos.filter(producto => {
            return producto.id != id;
        })

        fs.writeFileSync(productosPath, JSON.stringify(productosFiltrados, null, " "));

        res.redirect("/productos/productos");
    }
}
module.exports = controller;