const checkDateAndRate = require('./checkDateAndRate');

const checkTalk = (req, res, next) => {
  const { talk } = req.body;

  if (!talk || !talk.watchedAt || talk.rate === undefined) {
    return res
      .status(400)
      .json(
        { message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' },
        );
  }
  checkDateAndRate(req, res, next);

  next();
};

module.exports = checkTalk;