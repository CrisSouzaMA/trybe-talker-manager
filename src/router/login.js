const express = require('express');
const generateToken = require('../middlewares/token');
const { checkEmail, checkPassword } = require('../middlewares/validationlogin');

const router = express.Router();

const HTTP_OK_STATUS = 200;

router.post('/', checkEmail, checkPassword, (_req, res) => {
  const token = generateToken();
  return res.status(HTTP_OK_STATUS).json({ token });
})

module.exports = router;