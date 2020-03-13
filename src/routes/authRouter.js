const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController'); 
router.get("/",AuthController.index);
router.post("/valida",AuthController.valida)
module.exports = router;