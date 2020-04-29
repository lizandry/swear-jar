var router = require('express').Router();

router.get('/', function (req, res, next) {
  res.status(200).send('hello world');
});

module.exports = router;