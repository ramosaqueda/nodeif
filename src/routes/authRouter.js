const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/authController'); 
router.get("/",AuthController.index);
router.post("/valida",AuthController.valida);
router.get("/logout",AuthController.logout);
module.exports = router;