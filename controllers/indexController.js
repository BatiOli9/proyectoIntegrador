const controller = {
    index:(req, res) =>{
        return res.render('index')
    },
    login:(req, res) =>{
        return res.render('login')
    },
    register:(req, res) =>{
        return res.render('register')
    }
}
module.exports = controller;