const controller = {
    producto1:(req, res) =>{
        return res.render('producto1')
    },
    producto2:(req, res) =>{
        return res.render('producto2')
    },
    producto3:(req, res) =>{
        return res.render('producto3')
    },
    producto4:(req, res) =>{
        return res.render('producto4')
    }
}
module.exports = controller;