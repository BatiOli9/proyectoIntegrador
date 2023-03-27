let express = require('express');
const router = express.Router();

const indexController = require ('../controllers/indexController')

router.get('/', indexController.index);
router.get('/login', indexController.login);
router.get('/register', indexController.register);
router.get('/pruebaSession', function(req, res) {
    if(req.session.numeroVisitas == undefined) {
        req.session.numeroVisitas = 0;
    }

    req.session.numeroVisitas++;

    res.send("Session tiene el numero " + req.session.numeroVisitas);
});


module.exports = router;