let express = require('express');
const { productos } = require('../controllers/productosController');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { check } = require('express-validator');

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

// Crear producto
const validaciones = [
    check('nombre').notEmpty().withMessage('Debes completar el campo de nombre del producto'),
    check('codigo').notEmpty().withMessage('Debes completar el campo de codigo del producto'),
    check('precio').notEmpty().withMessage('Debes completar el campo de precio del producto'),
    check('garantia').notEmpty().withMessage('Debes completar el campo de garantia del producto'),
    check('descripcion').notEmpty().withMessage('Debes completar el campo de descripcion del producto'),
    check('tipo').notEmpty().withMessage('Debes completar el campo de tipo de producto')
];
router.post('/crear-producto', upload.single("img"), validaciones, productosController.crearProductoProcesar);
router.get('/crear-producto', productosController.crearProducto);

// Todos los productos
router.get('/productos', productosController.productos);

// Editar Productos

router.get('/editar-producto/:id', productosController.editarProducto);
router.put('/editar-producto/:id', upload.single("img"), validaciones, productosController.editarProductoProcesar);

// Detalle producto
router.get('/productoDetalle/:id/', productosController.productoDetalle);

// Borrar Productos

router.delete('/eliminar/:id', productosController.eliminarProducto);

module.exports = router;