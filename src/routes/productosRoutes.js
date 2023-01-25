let express = require('express');
const { productos } = require('../controllers/productosController');
const router = express.Router();

const productosController = require ('../controllers/productosController')

// Detalle producto
router.get('/productoDetalle/:id/', productosController.productoDetalle);

// Crear producto
router.post('/crear-producto', productosController.crearProductoProcesar);
router.get('/crear-producto', productosController.crearProducto)

// Todos los productos
router.get('/productos', productosController.productos)

// Editar Productos

router.get('/editar-producto/:id', productosController.editarProducto);
router.put('/editar-producto/:id', productosController.editarProductoProcesar);

// Borrar Productos

router.delete('/eliminar/:id', productosController.eliminarProducto);

module.exports = router;