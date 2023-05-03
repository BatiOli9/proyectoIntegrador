const fs = require('fs');
const path = require('path');
const db = require('../database/models');

const productosPath = path.join(__dirname, '../databases/productosDataBase.json');
const products = JSON.parse(fs.readFileSync(productosPath, 'utf-8'));

const controller = {
    index: (req, res) => {
        db.Productos.findAll( { where: { destacado : 1}, raw: true } )
            .then(function (productos) {
                res.render("index", {productos})
            })
    },
    login:(req, res) =>{
        return res.render('login')
    },
    register:(req, res) =>{
        return res.render('register')
    }
}
module.exports = controller;