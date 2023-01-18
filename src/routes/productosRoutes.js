let express = require('express');
const router = express.Router();

const productosController = require ('../controllers/productosController')

// Detalle producto
router.get('/productoDetalle/:id/', productosController.productoDetalle);

// Crear producto
router.post('/crear-producto', productosController.crearProductoProcesar);
router.get('/crear-producto', productosController.crearProducto)


module.exports = router;