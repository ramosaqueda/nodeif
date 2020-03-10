const express = require('express');
const router = express.Router();

const peritajesController = require('../controllers/peritajesController');

 
router.get("/", peritajesController.index)
router.get('/view/:id',peritajesController.edit);
router.get('/edit/:id', peritajesController.edit);
router.post('/update/:id', peritajesController.update);  
router.get('/create/',peritajesController.create);
router.post('/add/',peritajesController.add);

//router.get('/delete/:id',peritasjeController.delete);
//router.get('/view/:id',peritajesController.view);
module.exports = router;