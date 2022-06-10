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

module.exports = read;