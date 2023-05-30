const express = require('express');

require('./config/db');

const app = express();

app.get('/', (req, res) => {
  res.send({message:'Bem vindo a nossa API!'});
})

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
})