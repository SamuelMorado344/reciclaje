const { Router } = require('express');
const {  orden_dialGET, pruebaGet,  } = require('../controllers/dial');





const router = Router();





router.get('/orden_dial/',
    [
    ]
    , orden_dialGET);

router.get('/pruebaGet',
    [
    ]
    , pruebaGet);


module.exports = router;


