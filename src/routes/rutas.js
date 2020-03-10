const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
 
    res.render('dash');
  });



//peritajes

 
const peritajeController = require('../controllers/peritajesController');
router.get('/peritajes_list', peritajeController.list);
router.get('/peritajes_view/:id',peritajeController.view);
router.get('/peritajes_reg',peritajeController.registro);
 

 
module.exports = router;