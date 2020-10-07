const { Router } = require('express');

const router = Router();

router.use('/', (req, res) => {
  res.status(200).json({ status: 200, message: 'Test successful' });
});

module.exports = router;
