const express = require("express")
const router = express.Router()
const itemsController = require('../controllers/items')

router.post('/items', itemsController.createItem)
router.get('/items', itemsController.findItems)

module.exports = router;