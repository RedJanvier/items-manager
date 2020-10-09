const express = require("express")
const router = express.Router()
const itemsController = require('../controller/items')
const controllers = require('../controller')

router.post('/items', itemsController.createItem)
router.get('/items', itemsController.findItems)

router.get('/item/:itemId', controllers.getItemById);
router.delete('/item/:itemId',controllers.deleteItem)
module.exports = router;
