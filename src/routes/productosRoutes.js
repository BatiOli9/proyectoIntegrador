let express = require('express');
const router = express.Router();

const productosController = require ('../controllers/productosController')

router.get('/productoDetalle/:id/', productosController.productoDetalle);
router.get('/crear-producto', productosController.crearProducto);


module.exports = router;