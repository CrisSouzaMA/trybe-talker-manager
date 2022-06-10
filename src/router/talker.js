const express = require('express');
const read = require('../service/read');

const router = express.Router();

const talkers = './talker.json';

const HTTP_OK_STATUS = 200;

router.get('/', (_req, res) => {
  const talkerss = read(talkers);
  if (talkerss === '') return res.status(HTTP_OK_STATUS).json([]);
  
  res.status(HTTP_OK_STATUS).json(talkerss);
  console.log('ola');
});

module.exports = router;