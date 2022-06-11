const checkEmail = (req, res, next) => {
  const validEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
  const { email } = req.body;

  if (!email || email === '') {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' })
  }
  const check = validEmail.test(email);
  if (!check) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
}

const checkPassword = (req, res, next) => {
  const lenghtPassword = 6;
  const { password } = req.body;

  if (!password || passoword === '') {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < lenghtPassword) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
}

module.exports = {
  checkEmail,
  checkPassword,
}