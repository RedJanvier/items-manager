const express = require("express")
const router = express.Router()
const itemsController = require('../controller/items')
const controllers = require('../controller')
const usersController = require('../controller/users')


router.post('/items', itemsController.createItem)
router.get('/items', itemsController.findItems)
router.post('/users/register', usersController.createUser)

router.get('/item/:itemId', controllers.getItemById);
router.delete('/item/:itemId', controllers.deleteItem)
module.exports = router;