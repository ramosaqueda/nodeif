const express = require('express');
const router = express.Router();

const peritosController = require('../controllers/peritosController');

router.get("/", peritosController.index)
router.get("/create", peritosController.create)
router.post("/", peritosController.store)
router.get("/:id/edit", peritosController.edit)
router.put("/:id", peritosController.update)
router.delete("/:id", peritosController.destroy)
 

module.exports = router;