const express = require('express');

require('./config/db');

const app = express();

const router = require('./routes');

app.get('/', (req, res) => {
  res.send({message:'Bem vindo a nossa API!'});
})

app.use(express.json());

app.use(router);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
})