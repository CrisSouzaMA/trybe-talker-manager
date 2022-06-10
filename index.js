const express = require('express');
const bodyParser = require('body-parser');
const routerTalker = require('./src/route/talkers');

const app = express();
app.use(bodyParser.json());

const PORT = '3000';

app.use('/talker', routerTalker);

app.listen(PORT, () => {
  console.log('Online');
});
