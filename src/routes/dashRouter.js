const express = require('express');
const router = express.Router();
const DashController = require('../controllers/DashController'); 
router.get("/", DashController.index)
module.exports = router;