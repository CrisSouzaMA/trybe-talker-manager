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

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const talker = read(talkers);
  const talkerId = talker.find((t) => t.id === Number(id));
  if (!talkerId) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });

  res.status(200).json(talkerId);
})

module.exports = router;