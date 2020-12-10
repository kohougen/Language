const express = require('express');
const router = express.Router();
const servicesFactory = require('../services/servicesFactory');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const data = await servicesFactory.UserService.findOne('tru@gmail.com');
  res.status(200).json(data);
});

module.exports = router;
