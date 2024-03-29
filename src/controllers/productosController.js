const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const { validationResult } = require('express-validator');
/* const { error } = require('console'); */

// Vamos a traer y a guardar el objeto literal donde guardamos toda la informacion de los productos
const productosPath = path.join(__dirname, '../databases/productosDataBase.json');

const controller = {
    productoDetalle: (req, res) => {
        db.Productos.findOne({ where: { id: req.params.id } })
            .then(function (productos) {
                console.log(productos)
                res.render('productoDetalle', { productos })
            })
    },
    crearProducto: (req, res) => {
        db.Tipos.findAll()
            .then(function (tipos) {
                res.render("crear-producto", { tipos });
            })
    },
    crearProductoProcesar: (req, res) => {

        let errores = validationResult(req);

        if (errores.isEmpty()){
            db.Productos.create({
                nombre: req.body.nombre,
                codigo: req.body.codigo,
                precio: req.body.precio,
                garantia: req.body.garantia,
                descripcion: req.body.descripcion,
                img: req.file ? req.file.filename : Date.now() + "producto",
                stock: true,
                tipo_id: req.body.tipo
            })

            .then(function (){
                res.redirect('/productos/productos')
            });

        }
        else {
            db.Tipos.findAll()
            .then(function (tipos) {
                res.render("crear-producto", { tipos, errores: errores.array() });
            })
        }
    },
    productos: (req, res) => {
        db.Productos.findAll()
            .then(function (productos) {
                res.render("productos", { productos })
            })
    },
    editarProducto: async function (req, res) {
        try {
            let products = await db.Productos.findOne({ where: { id: req.params.id } })
            let tipos = await db.Tipos.findAll()
            res.render("editar-producto", {producto: products, tipos })          
        } catch (error) {
            console.log(error);
        }
    },
    editarProductoProcesar: (req, res) => {

        let errores = validationResult(req);

        if (errores.isEmpty()){
            db.Productos.findByPk(req.params.id)
            .then(productoViejo => {
                db.Productos.update({
                    nombre: req.body.nombre,
                    precio: req.body.precio,
                    descuento: req.body.descuento,
                    codigo: req.body.codigo,
                    garantia: req.body.garantia,
                    descripcion: req.body.descripcion,
                    img: req.file ? req.file.filename : productoViejo.img,
                    stock: true
                }, {
                    where: {
                        id: req.params.id
                    }
                })
            })
            .then(product => {
                res.redirect('/productos/productos')
            })
        } 
        else {
                db.Tipos.findAll()
                    .then(function (tipos) {
                        let producto = req.body;
                        producto.id = req.params.id;
                        res.render("editar-producto", {errores: errores.array(), producto, tipos });
                    })
            }
    },
    eliminarProducto: (req, res) => {
        db.Productos.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(product => {
                res.redirect("/productos/productos")
            })
    }
}
module.exports = controller;