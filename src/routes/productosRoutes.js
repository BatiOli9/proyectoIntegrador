let express = require('express');
const { productos } = require('../controllers/productosController');
const router = express.Router();
const multer = require('multer');

const productosController = require ('../controllers/productosController')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/images")
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({storage: storage});

// Detalle producto
router.get('/productoDetalle/:id/', productosController.productoDetalle);

// Crear producto
router.post('/crear-producto', upload.single("productImage"), productosController.crearProductoProcesar);
router.get('/crear-producto', productosController.crearProducto)

// Todos los productos
router.get('/productos', productosController.productos)

// Editar Productos

router.get('/editar-producto/:id', productosController.editarProducto);
router.put('/editar-producto/:id', upload.single("productImage"), productosController.editarProductoProcesar);

// Borrar Productos

router.delete('/eliminar/:id', productosController.eliminarProducto);

module.exports = router;