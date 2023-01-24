const fs = require('fs');
const path = require('path');

const productosPath = path.join(__dirname, '../databases/productosDataBase.json');
const products = JSON.parse(fs.readFileSync(productosPath, 'utf-8'));

const controller = {
    index:(req, res) =>{
        const productosLeidos = JSON.parse(fs.readFileSync(productosPath, 'utf-8'));

        let productosDestacadosFiltrados = productosLeidos.filter( producto => {
            return producto.destacado == true;
        })

        return res.render('index', {productosDestacados: productosDestacadosFiltrados});
    },
    login:(req, res) =>{
        return res.render('login')
    },
    register:(req, res) =>{
        return res.render('register')
    }
}
module.exports = controller;