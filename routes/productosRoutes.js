let express = require('express');
const router = express.Router();

const productosController = require ('../controllers/productosController')

router.get('/producto1', productosController.producto1);
router.get('/producto2', productosController.producto2);
router.get('/producto3', productosController.producto3);
router.get('/producto4', productosController.producto4);


module.exports = router;