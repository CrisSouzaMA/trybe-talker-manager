const express = require('express');
const { read, write } = require('../service/readWrite');
const checkToken = require('../middlewares/validationToken');
const checkName = require('../middlewares/validationName');
const checkAge = require('../middlewares/validationAge');
const checkTalk = require('../middlewares/validationTalk');

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
});

router.post('/', checkToken, checkName, checkAge, checkTalk, (req, res) => {
  const talks = read(talkers);
  const { name, age, talk } = req.body;
  talks.push({ name, age, id: talks.length + 1, talk });
  write('./talker.json', talks);
  return res.status(201).json({ name, age, id: talks.length, talk });
});


module.exports = router;