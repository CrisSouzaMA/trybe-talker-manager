const fs = require('fs');

const read = (file) => {
  try {
    const readF = fs.readFileSync(file);
    const reading = JSON.parse(readF);
    return reading;
  } catch (e) {
    console.error(`Erro: ${e.message}`);
  }
};

const write = (__dirname, file) => {
  try {
    fs.writeFileSync(__dirname, JSON.stringify(file, null, 2));
  } catch (err) {
    console.error(`Erro: ${err.message}`);
  }
};

module.exports = {
  read,
  write,
}