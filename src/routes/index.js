const { Router } = require('express');
const controller = require('../controller/updateController.js')
const controllerToken = require('../controller/token.js')
const router = Router();

router.use('/', (req, res) => {
  res.status(200).json({ status: 200, message: 'Test successful' });
});
router.patch('/taken/:itemId', controller.updateTaken);
router.post('/token',controllerToken.loginn);
module.exports = router;
